<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipantNumber extends Model
{
    use HasFactory;

    protected $table = "participant_number";

    protected $fillable = ['number', 'id_participant','id_event_category_distance'];

    protected $hidden = ['id'];
    /**
     * Get all participants Numbers
     * @param int $event
     * @return array $participants
     */
    public function getAllParticipantNumbers($event)
    {
        return ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id', '=', 'participant_number.id_event_category_distance')
        ->leftJoin('paid', 'paid.id_participant','=','participant_number.id_participant')
        ->where('event_category_distances.id_event', $event)->where('paid.id_status', 2)->orderBy('participant_number.number', 'ASC')->get()->toArray();
    }
    /**
     * Return last number available in database
     * @param int $event
     */
    public function getLastElementNumber($event)
    {
        return ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id', '=', 'participant_number.id_event_category_distance')
            ->leftJoin('paid', 'paid.id_participant','=','participant_number.id_participant')
            ->where('paid.id_status', 2)
            ->where('id_event', $event)->max('number');
    }

    public function eventCategory()
    {
        return $this->belongsTo(EventCategory::class);
    }
    /**
     * Return participants status
     * @param int $status
     * @param int $event
     */
    public function countParticipantsStatus($status = 1, $event)
    {
        return ParticipantNumber::rightJoin('paid', 'paid.id_participant','=','participant_number.id_participant')
        ->rightJoin('event_category_distances', 'event_category_distances.id', '=', 'participant_number.id_event_category_distance')
        ->where('event_category_distances.id_event', $event)
        ->where('paid.id_status', $status)
        ->count();
    }
    /**
     * Return total of participants for category using event id and category id
     * @param int $event
     * @param int $id_category
     * @return int $total
     */
    public function countTotalOfParticipantsForCategory($event, $id_category)
    {
        return ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id','=', 'participant_number.id_event_category_distance')
        ->where('event_category_distances.id_event', $event)
        ->where('event_category_distances.id_category', $id_category)
        ->count();
    }
    /**
     * Return total of participants for category using event id, category id and gender
     * @param int $event
     * @param int $id_category
     * @param string $gender
     * @return int $total
     */
    public function countTotalOfParticipantsForCategoryUsingGender($event, $id_category, $gender)
    {
        return ParticipantNumber::leftJoin('event_category_distances', 'event_category_distances.id','=', 'participant_number.id_event_category_distance')
        ->leftJoin('participant', 'participant.id', '=', 'participant_number.id_participant')
        ->where('event_category_distances.id_event', $event)
        ->where('event_category_distances.id_category', $id_category)
        ->where('participant.gender', $gender)
        ->count();
    }
    /**
     * Return total of participants usign id event and shirt size
     * @param int $event
     * @param string $shirt_size
     */
    public function countTotalOfParticipantsForShirtSize($event, $shirt_size)
    {
        return ParticipantNumber::leftJoin('participant_details','participant_details.id_participant','=','participant_number.id_participant')
        ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->where('event_category_distances.id_event',$event)
        ->where('participant_details.shirt_size', $shirt_size)
        ->count();
    }
    /**
     * Return total of participants using id event, shirt size and participants gender
     * @param int $event
     * @param string $shirt_size
     * @param string $gender
     */
    public function countTotalOfParticipantsForShirtSizeUsingGenre($event, $shirt_size, $gender)
    {
        return ParticipantNumber::leftJoin('participant_details','participant_details.id_participant','=','participant_number.id_participant')
        ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->leftJoin('participant', 'participant.id','=','participant_number.id_participant')
        ->where('event_category_distances.id_event',$event)
        ->where('participant_details.shirt_size', $shirt_size)
        ->where('participant.gender', $gender)
        ->count();
    }
    /**
     * Return total of shirts participants available
     * @param int $event
     */
    public function countTotalOfShirtSize($event)
    {
        return ParticipantNumber::leftJoin('participant_details','participant_details.id_participant','=','participant_number.id_participant')
        ->leftJoin('event_category_distances','event_category_distances.id','=','participant_number.id_event_category_distance')
        ->where('event_category_distances.id_event',$event)
        ->count();
    }

}
