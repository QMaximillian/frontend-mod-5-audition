import React from 'react'



const AuditionJournalCard = (props) => {

  // const newDate = (time) => {
  //     return new Date(time)
  // }

  const { auditionJournal } = props

  console.log(auditionJournal)
  return(
    <div /* Link to a show page w/ onClick */>
      {auditionJournal.created_at}
      {auditionJournal.song_one}
    </div>
  )
}

// could_do_better: "dancing"
// created_at: "2018-09-23T13:33:25.931-04:00"
// did_amazing: "monologues"
// did_well: "singing"
// feeling: "good"
// id: 1
// journal: "It felt okay, but I think I need to warmup more before auditions"
// miscellaneous: "N/A"
// monologue_one: "MONO 1"
// monologue_two: "MONO 2"
// song_one: "Giants in the Sky"
// song_two: "Anything Goes"
// tryout_id: 1

export default AuditionJournalCard
