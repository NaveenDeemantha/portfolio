# Quick Start Script for Portfolio with Contact Form

Write-Host "🚀 Starting Portfolio Application..." -ForegroundColor Cyan
Write-Host ""

# Check if server/.env exists
if (-Not (Test-Path "server\.env")) {
    Write-Host "⚠️  Warning: server/.env file not found!" -ForegroundColor Yellow
    Write-Host "📝 Please copy server/.env.example to server/.env and configure it" -ForegroundColor Yellow
    Write-Host "   See EMAIL_SETUP.md for detailed instructions" -ForegroundColor Yellow
    Write-Host ""
    
    $response = Read-Host "Do you want to continue anyway? (y/n)"
    if ($response -ne "y") {
        exit
    }
}

# Check if server dependencies are installed
if (-Not (Test-Path "server\node_modules")) {
    Write-Host "📦 Installing server dependencies..." -ForegroundColor Cyan
    Set-Location server
    npm install
    Set-Location ..
    Write-Host "✅ Server dependencies installed" -ForegroundColor Green
    Write-Host ""
}

# Start backend server in a new window
Write-Host "🔧 Starting backend server on http://localhost:3001..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\server'; npm run dev"

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start frontend
Write-Host "🎨 Starting frontend on http://localhost:5173..." -ForegroundColor Cyan
Write-Host ""
Write-Host "✨ Both servers are starting!" -ForegroundColor Green
Write-Host "   - Frontend: http://localhost:5173" -ForegroundColor White
Write-Host "   - Backend:  http://localhost:3001" -ForegroundColor White
Write-Host ""
Write-Host "📧 Make sure you've configured server/.env with your Brevo credentials" -ForegroundColor Yellow
Write-Host "   See EMAIL_SETUP.md for setup instructions" -ForegroundColor Yellow
Write-Host ""

npm run dev
