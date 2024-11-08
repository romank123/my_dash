<template>
    <div class="flex h-screen overflow-hidden">

        <!-- Sidebar -->
        <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

        <!-- Content area -->
        <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

            <!-- Site header -->
            <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

            <main>
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

                    <!-- Welcome banner -->
                    <WelcomeBanner />

                    <!-- Dashboard actions -->
                    <div class="sm:flex sm:justify-between sm:items-center mb-8">

                        <!-- Left: Avatars -->
                        <DashboardAvatars />

                        <!-- Right: Actions -->
                        <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

                            <!-- Filter button -->
                            <FilterButton align="right" />
                            <!-- Datepicker built with flatpickr -->
                            <Datepicker align="right" />
                        </div>

                    </div>

                    <!-- Cards -->
                    <div class="grid grid-cols-12 gap-6">

                        <!-- Line chart (Acme Plus) -->
                        <DashboardCard01 />
                        <!-- Line chart (Acme Advanced) -->
                        <DashboardCard02 />
                        <!-- Line chart (Acme Professional) -->
                        <DashboardCard03 />
                        <!-- Bar chart (Direct vs Indirect) -->
                        <DashboardCard04 />
                        <!-- Line chart (Real Time Value) -->
                        <DashboardCard05 />
                        <!-- Doughnut chart (Top Countries) -->
                        <DashboardCard06 />
                        <!-- Table (Top Channels) -->
                        <DashboardCard07 />
                        <!-- Line chart (Sales Over Time) -->
                        <DashboardCard08 />
                        <!-- Stacked bar chart (Sales VS Refunds) -->
                        <DashboardCard09 />
                        <!-- Card (Recent Activity) -->
                        <DashboardCard10 />
                        <!-- Card (Income/Expenses) -->
                        <DashboardCard11 />

                    </div>

                </div>
            </main>

        </div>

    </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import Header from './Header.vue'

export default {
    name: 'Dashboard',
    components: {
        Sidebar,
        Header
    },
    setup() {

        const sidebarOpen = ref(false)

        return {
            sidebarOpen,
        }
    }
}
</script>