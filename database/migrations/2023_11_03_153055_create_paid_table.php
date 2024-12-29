<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaidTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('paid', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_participant');
            $table->foreign('id_participant')->references('id')->on('participant')
            ->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('id_paid_type');
            $table->foreign('id_paid_type')->references('id')->on('paid_type');
            $table->unsignedBigInteger('id_status');
            $table->foreign('id_status')->references('id')->on('status');
            $table->string('reference')->nullable();
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
        Schema::dropIfExists('paid');
    }
}
