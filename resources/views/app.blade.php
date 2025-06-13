<!DOCTYPE html>
<html lang="en" data-theme="{{ session('theme', 'light') }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lumo Event Manager</title>
    <link rel="icon" type="image/png" href="/fav.png">
    @viteReactRefresh
    @vite(['resources/js/app.jsx'])
</head>

<body>
    <div id="root"></div>
</body>

</html>
