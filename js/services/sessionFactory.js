app.factory('session', function ($cookieStore) {

    return {
        get: function (key) {
            $cookieStore.get(key);
        },
        set: function (key, val) {
            $cookieStore.put(key, val);
        },
        remove: function (key) {
            $cookieStore.remove(key);
        },
        logout: function () {
            $cookieStore.remove('token');
            $cookieStore.remove('token_type');
            $cookieStore.remove('username');
            $cookieStore.remove('isAdmin');
            $cookieStore.put('isLogged', false);
        }
    }
});