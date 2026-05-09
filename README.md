# SmartFIC - Air Quality & Health Risk Monitoring

A web-based application for monitoring air quality levels and assessing health risks from air pollutant exposure across multiple monitoring points.

## Features

- **Interactive Map Dashboard**: View air quality monitoring points on an interactive map with real-time data visualization
- **Health Risk Assessment**: Calculate personalized health risks based on individual exposure parameters
- **Air Quality Monitoring**: Track multiple pollutants (PM2.5, PM10, SO2, CO, NO2) and environmental factors
- **Admin Panel**: Manage air quality monitoring points and system users
- **Risk Visualization**: Color-coded risk levels (green/yellow/orange/red) for quick assessment

## Tech Stack

**Backend:**
- Laravel 10 with PHP 8.1+
- Laravel Sanctum for API authentication
- Inertia.js for server-driven UI

**Frontend:**
- React 18
- Tailwind CSS for styling
- Leaflet for interactive maps
- Chart.js for data visualization

## Getting Started

### Prerequisites
- PHP 8.1 or higher
- Composer
- Node.js and npm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd sirkul
```

2. Install PHP dependencies
```bash
composer install
```

3. Install JavaScript dependencies
```bash
npm install
```

4. Set up environment
```bash
cp .env.example .env
php artisan key:generate
```

5. Configure database in `.env` and run migrations
```bash
php artisan migrate
```

6. Seed initial data (optional)
```bash
php artisan db:seed
```

## Running the Application

### Development

Start the development server:
```bash
php artisan serve
```

In a separate terminal, run Vite for frontend:
```bash
npm run dev
```

Access the application at `http://localhost:8000`

### Production

Build frontend assets:
```bash
npm run build
```

## Usage

### For Users
1. Navigate to the dashboard
2. View air quality monitoring points on the map
3. Use the Risk Assessment form to calculate personal health risk based on:
   - Body weight
   - Exposure time
   - Exposure frequency
   - Inhalation rate
   - Time period

### For Admins
1. Access `/admin/points` to manage air quality monitoring points
2. Add new monitoring locations with coordinates and pollution data
3. Access `/admin/users` to manage system users

## Project Structure

```
app/
├── Models/              # Data models
├── Http/Controllers/    # Request handlers
└── Services/            # Business logic

resources/
├── js/
│   ├── Components/      # Reusable React components
│   └── Pages/           # Page components
└── views/               # Blade templates

routes/
├── api.php              # API routes
└── web.php              # Web routes

database/
├── migrations/          # Database schema
└── seeders/             # Data seeders
```

