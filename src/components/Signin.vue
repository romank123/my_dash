<template>
    <main class="bg-white">

        <div class="relative flex">

            <!-- Content -->
            <div class="w-full">
                <div class="min-h-screen h-full flex flex-col justify-center">
                    <div class="max-w-sm mx-auto px-4 py-8">
                        <h1 class="text-3xl text-slate-800 font-bold mb-6">Добро пожаловать! ✨</h1>
                        <!-- Form -->
                        <form>
                            <div class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="email">Email</label>
                                    <input id="email" class="form-input w-full" type="email" />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-1" for="password">Пароль</label>
                                    <input id="password" class="form-input w-full" type="password" autoComplete="on" />
                                </div>
                            </div>
                            <div class="flex items-center justify-between mt-6">
                                <div class="mr-1">
                                    <router-link class="text-sm underline hover:no-underline"
                                        to="/reset-password">Забыли пароль?</router-link>
                                </div>
                                <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"
                                    to="/">Войти</router-link>
                            </div>
                        </form>
                        <!-- Footer -->
                        <div class="pt-5 mt-6 border-t border-slate-200">
                            <div class="text-sm">
                                Нет аккаунта? <router-link class="font-medium text-indigo-500 hover:text-indigo-600"
                                    to="/signup">Зарегистрироваться</router-link>
                            </div>
                            <!-- Warning -->
                            <div class="mt-5">
                                <div class="bg-amber-100 text-amber-600 px-3 py-2 rounded">
                                    <svg class="inline w-3 h-3 shrink-0 fill-current mr-2" viewBox="0 0 12 12">
                                        <path
                                            d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                                    </svg>
                                    <span class="text-sm">
                                        To support you during the pandemic super pro features are free until March 31st.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </main>
</template>

<script>

export default {
    name: 'Signin',
}
</script>