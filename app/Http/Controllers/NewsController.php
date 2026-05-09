<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        $news = News::where('status', 'published')
            ->latest()
            ->paginate(10);

        return Inertia::render('News/Index', [
            'news' => $news
        ]);
    }

    public function show($slug)
    {
        $news = News::with('author')
            ->where('slug', $slug)
            ->firstOrFail();

        $related = News::where('id', '!=', $news->id)
            ->latest()
            ->limit(5)
            ->get();

        return Inertia::render('News/Show', [
            'news' => $news,
            'related' => $related
        ]);
    }
}
