<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\IControlController;
use App\Http\Controllers\PaidController;
use App\Http\Middleware\isAuth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [EventController::class, 'index']);
Route::post('/openware/store', [EventController::class, 'store'])->name('save');
Route::get('/checkout/{id}', [EventController::class, 'checkout']);
Route::post('/checkmail', [EventController::class, 'checkEmail'])->name('checkMail');
Route::post('/send-mail-payment', [EventController::class, 'sendPaymentEmail'])->name('sendPaymentEmail');
Route::get('/email', [EventController::class, 'sendParticipantMail'])->name('email');
Route::get('/generatexml', [EventController::class, 'generateXML'])->name('generateXML');
Route::post('/definePaidAmount/{price}', [PaidController::class, 'definePaidAmount'])->name('definePaidAmount');
Route::post('/oxxoPay/{id}', [PaidController::class, 'oxxoPay']);
Route::post('/cardPay/{id}/{conektaTokenId}', [PaidController::class, 'cardPaid']);
Route::post('/availableShirtSizes', [DashboardController::class, 'availableShirtSizes'])->name('availableSizes');

Route::get('/icontrol',[IControlController::class, 'index'])->name('login');
Route::post('/icontrol/custom-login',[IControlController::class, 'customLogin'])->name('login.custom');

Route::group(['middleware' => ['isAuth']], function() {
    Route::get('/icontrol/dashboard',[IControlController::class, 'dashboard'])->name('dashboard');
    Route::get('/icontrol/signout', [IControlController::class, 'signOut'])->name('signout');
    // Route::get('/icontrol/registration', [IControlController::class, 'registration'])->name('register.user');
    // Route::post('/icontrol/custom-registration', [IControlController::class, 'customRegistration'])->name('register.custom');
    Route::get('/icontrol/dashboard/show', [DashboardController::class, 'show'])->name('show');
    Route::post('/icontrol/dashboard/data-participante', [DashboardController::class, 'participanteData']);
    Route::post('/icontrol/dashboard/update', [DashboardController::class, 'update']);
    Route::post('/icontrol/dashboard/change-status', [DashboardController::class, 'changeEstatus']);
    Route::post('/icontrol/dashboard/send-mail', [DashboardController::class, 'sendMail']);
});

