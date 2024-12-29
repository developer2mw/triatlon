<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParticipantNumberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('participant_number', function (Blueprint $table) {
            $table->id();
            $table->integer('number')->default(0);
            $table->unsignedBigInteger('id_participant');
            $table->foreign('id_participant')->references('id')->on('participant')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('id_event_category_distance');
            $table->foreign('id_event_category_distance')->references('id')->on('event_category_distances');
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
        Schema::dropIfExists('participant_number');
    }
}
