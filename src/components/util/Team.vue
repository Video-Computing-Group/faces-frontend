<template>
    <div class="team">
        <h4>FACES 1.0</h4>

        <h5>Team</h5>

        <p v-for="t in team1" :key="t.name">
          <strong>{{ t.name }}</strong>, {{ t.text }}
        </p>

        <h5>Publications</h5>
        <p>
          The FACES project was a collaboration of the humanities (art history) and the sciences (computer science).  The 2017 article below presents FACES from the point of view of the humanities, that is, the general issues involved in the application of face recognition technology to works of portrait art, how this technology generally works, what the parameters of its application to portrait art were when the article was written, what its potential advantages are, and so on.  The 2015 article presents FACES from the computer science angle, although this program, FACES 1.0, is now surpassed by FACES 2.0.  Both papers are meant to operate as a pair.
        </p>

        <p>
          <em>
            Conrad Rudolph, Amit Roy-Chowdhury, Ramya Srinivasan, and Jeanette Kohl, "FACES: Faces, Art, and Computerized Evaluation Systems--A Feasibility Study of the Application of Face Recognition Technology to Works of Portrait Art," Artibus et Historiae 75 (2017) 265-291.
          </em>
        </p>
        <p>
          <em>
            Ramya Srinivasan, Conrad Rudolph, and Amit Roy-Chowdhury, "Computerized Face Recognition in Renaissance Portrait Art," Signal Processing Magazine 32:4 (July 2015) 85-94.
          </em>
        </p>

        <h4>FACES 2.0</h4>
        <h5>Team</h5>

        <p v-for="t in team2" :key="t.name">
          <strong>{{ t.name }}</strong>, {{ t.text }}
        </p>

        <h5>Publications</h5>
        <p>
          <em>
            Akash Gupta, Niluthpol Mithun, Conrad Rudolph, and Amit K. Roy-Chowdhury, "Deep Learning Based Identity Verification in Renaissance Portraits," IEEE International Conference on Multimedia and Expo (ICME) 2018.
          </em>
        </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            team1: [
                {
                    name: 'Conrad Rudolph',
                    text: 'Professor, Department of the History of Art, University of California, Riverside (Project Director and Principal Investigator)'
                },
                {
                    name: 'Amit Roy-Chowdhury',
                    text: 'Professor, Department of Electrical Engineering, University of California, Riverside (expert on computer vision and image processing, oversaw all technological research)'
                },
                {
                    name: 'Ramya Srinivasan',
                    text: 'doctoral student, Department of Electrical Engineering, University of California, Riverside (conducted most of the computer vision and image processing research under the direction of Professor Roy-Chowdhury)'
                },
                {
                    name: 'Jeanette Kohl',
                    text: 'Associate Professor, Department of the History of Art, University of California, Riverside (an authority on portraiture and the face in art)'
                }
            ],
            team2: [
              {
                name: 'Conrad Rudolph',
                text: 'Professor, Department of the History of Art, University of California, Riverside (Project Director and Principal Investigator)'
              },
              {
                name: 'Amit Roy-Chowdhury',
                text: 'Professor, Department of Electrical Engineering, University of California, Riverside (expert on computer vision and image processing, oversaw all technological research)'
              },
              {
                name: 'Akash Gupta',
                text: 'doctoral student, Department of Electrical Engineering, University of California, Riverside (conducted most of the computer vision and image processing research under the direction of Professor Roy-Chowdhury)'
              },
              {
                name: 'Niluthpol Chowdhury Mithun',
                text: 'doctoral student, Department of Electrical Engineering, University of California, Riverside (provided additional guidance)'
              }
            ]
        }
    }
}
</script>

<style scoped>
.team {
  top: -125px;
  position: relative;
  text-align: left !important;
}
h4, h5 {
  font-weight: 800;
  text-decoration: underline;
}
h4 {
  margin-top: 50px;
}
</style>
