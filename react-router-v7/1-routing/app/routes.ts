import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    // main route
    index("routes/home.tsx"), // arka tarafta bu sekilde yazilir ->  route('/', "routes/home.tsx"),

    // single route route(url, path)
    route('/about', "routes/about.tsx"),
    
    // auth layout layout(path, [children])
    layout('layouts/auth-layout.tsx', [
        route('/login', "routes/login.tsx"),
        route('/register', "routes/register.tsx"),
    ]),
    
    // nested routes route(url, path, [children]),
    route('/dashboard', "routes/dashboard.tsx", [
        index("routes/dashboard-main.tsx"),
        route('stats', "routes/stats.tsx"),
        route('blogs', "routes/blogs.tsx"),
        route('settings', "routes/settings.tsx"),
    ])




] satisfies RouteConfig;
