<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateParticipantDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('participant_details', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_participant');
            $table->foreign('id_participant')->references('id')-> on('participant')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->string('affliction')->nullable();
            $table->string('allergy')->nullable();
            $table->string('drugs')->nullable();
            $table->string('shirt_size', 5);
            $table->string('address')->nullable();
            $table->string('responsible');
            $table->string('phone_responsible');
            $table->string('club')->nullable();
            $table->unsignedBigInteger('id_state');
            $table->foreign('id_state')->references('id')->on('state');
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
        Schema::dropIfExists('participant_details');
    }
}
