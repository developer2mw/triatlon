<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call(StatusSeeder::class);
        $this->call(StateSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(EventSeeder::class);
        $this->call(EventCategorySeeder::class);
        $this->call(DistanceSeeder::class);
        $this->call(ParticipantSeeder::class);
        $this->call(ParticipantDetailsSeeder::class);
        $this->call(EventDistanceSeeder::class);
        $this->call(PaidTypeSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(EventCategoryDistanceSeeder::class);
    }
}
