<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    protected $routes;

    public function __construct()
    {
        $this->routes = [
            'singleplayer' => route('play.single-player'),
            'multiplayer' => route('play.multi-player'),
        ];
    }

    public function index()
    {
        return Inertia::render('Welcome', ['routes' => $this->routes]);
    }
    public function singlePlayer()
    {
        return Inertia::render('Game/SinglePlayer', ['routes' => $this->routes]);
    }

    public function multiPlayer()
    {
        return Inertia::render('Game/MultiPlayer', ['routes' => $this->routes]);
    }
}
