<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class NewsDataController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $news = News::with('author')->orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Admin/News/Index', [
            'news' => $news
        ]);
    }
    public function create()
    {
        return Inertia::render('Admin/News/Create');
    }
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'excerpt' => 'nullable',
            'thumbnail' => 'image|nullable',
            'status' => 'required',
            'published_at' => 'nullable|date'
        ]);

        $data['slug'] = $this->generateUniqueSlug($data['title']);
        $data['author_id'] = auth()->id();

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('news', 'public');
        }

        if ($data['status'] === 'published') {
            $data['published_at'] = now();
        }
        News::create($data);

        return redirect()->route('admin.news.index');
    }

    public function edit(News $news)
    {
        return Inertia::render('Admin/News/Edit', [
            'news' => $news
        ]);
    }

    public function update(Request $request, News $news)
    {
        $data = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'excerpt' => 'nullable',
            'thumbnail' => 'image|nullable',
            'status' => 'required',
            'published_at' => 'nullable|date'
        ]);

        $data['slug'] = $this->generateUniqueSlug($data['title']);

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('news', 'public');
        } else {
            $data['thumbnail'] = $news->thumbnail;
        }

        if ($data['status'] === 'published' && !$news->published_at) {
            $data['published_at'] = now();
        }

        $news->update($data);

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil diperbarui.');
    }

    public function destroy(News $news)
    {
        if ($news->thumbnail) {
            Storage::disk('public')->delete($news->thumbnail);
        }
        $news->delete();
        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil dihapus.');
    }

    private function generateUniqueSlug($title, $column = 'slug')
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;

        while (News::where($column, $slug)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
