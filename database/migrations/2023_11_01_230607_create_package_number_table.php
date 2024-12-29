<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePackageNumberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('package_number', function (Blueprint $table) {
            $table->id();
            $table->integer('number')->default(0);
            $table->unsignedBigInteger('id_participant');
            $table->foreign('id_participant')->references('id')->on('participant')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('id_package');
            $table->foreign('id_package')->references('id')->on('package');
            $table->unsignedBigInteger('id_event_category');
            $table->foreign('id_event_category')->references('id')->on('event_category');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('package_number');
    }
}
