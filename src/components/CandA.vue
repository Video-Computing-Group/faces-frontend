<template>
  <div id="home">
    <div class="text-body">
      <h2 class="title">Introduction: Potential uses for academics and curators</h2>
      <p>
        FACES and programs like FACES might be thought of as applications that not only automatically measure works of art (including large numbers of works of art) to a degree of precision and with an ease not possible before, practically speaking, but that also automatically analyze the results in a way not possible before.  However, in this early stage of the use of computer vision, FACES itself is naturally limited to one process of image analysis: face recognition.  In the use of computer vision, FACES and future programs like it can draw attention to previously unnoticeable or unconfirmable information by contributing categories of objective data--some of it possibly previously unthought of because the scale of analysis or type of analysis was not realistic before--to be used in conjunction with larger bodies of information to which the researcher already has access.  The human eye and the mind behind it remain the final arbiters--the researcher simply has more information now to use.
      </p>

      <h2 class="title">What FACES 2.0 might be used for</h2>
      <p>
        FACES is designed specifically for face recognition.  However, the use of FACES should not be thought of as limited to facial recognition in the sense of identification alone.
      </p>
      <p>
        For example, FACES might sometimes be of help in getting a better understanding of the artistic process.  One instance might be in cases where the researcher is interested in the use of previous models for a given portrait.  To take a specific example, our research suggests that Giovanni Bandini consulted the 1446 death mask cast of Brunelleschi (held by the Cathedral of Florence) over a century after the latter's death in the process of creating his own portrait of the architect of the dome of Florence Cathedral in the late sixteenth-century.  The same approach might be used in any number of situations, whether in reference to death masks or earlier drawings, paintings, or sculptures.
      </p>
      <p>
        FACES might also be able to be used to study difference in the depiction of various bodies of sitters--for example, queens, one among a number of potential subjects--who, as a group, at times seem to have been portrayed with a consciously more flattering rendering of the sitter than might historically have been the case.
      </p>
      <p>
        And FACES might be useful more broadly, for example to work out as much as possible the identities of particular bodies of miniature portraits of uncertain identity from the sixteenth century on, portraits that were often given as part of social and political networks and that might help recover lost networks at different levels of society, from the local to the national to the international.
      </p>

      <h2 class="title">Future directions for those interested in developing new computer vision programs</h2>
      <p>
        A program like FACES but in an altered form--for example, one that was designed specifically to present image processing to the user in terms of proportions (both relative and absolute)--might be very useful in the study of any number of different subjects.  Such a program might be applied to a study of adherence or non-adherence to widely recognized artistic canons, formal or informal, for bodies as well as faces.  It might be useful in identifying variations in the practice of individual artists: over time, with different subjects, with different genres, after exposure to external influences, and so on.  And it might be possible to study difference in larger bodies of works--art historical "big data"?--for instance, a particular body of art from Italy during a particular time frame examined in relation to a corresponding particular body from Northern Europe during a corresponding time frame.
      </p>
      <p>
        A program based on the analysis of proportions might even be applied to ornament of all kinds.  For example, such a program might be of enormous help in detecting certain minor variations in architectural detail--moldings or other components rendered in slightly different ways (not types) according to the particular practice of the individual mason--something that potentially might reveal a wealth of information about building processes, building history, and architectural identities.
      </p>
      <p>
        And such a program might be extremely useful in other more or less non-figural art, such as metalwork, ceramics, enamels, and other types of work commonly described as minor arts.
      </p>
      <p>
        In a different vein, it is possible to devise an application based on "Morellian" identifiers, thus providing support to the researcher in more confidently determining probable bodies of the work of artists, including anonymous artists and possible unrecognized works of known artists.  Such a program could even be applied to the so-called minor arts, in this case identifying sometimes particular traits of artists and craftsmen.
      </p>
      <p>
        And, since the style of an individual artist is able to be taught to computers, an application like this might be used to contribute to identifications of the artists of particular works of art--including works in which more than one artist participated.  Naturally, a program like this would have to be used with an understanding of all the potential pitfalls inherent in such an undertaking, especially with the first attempts.
      </p>
      <p>
        Kip Thorne, the 2017 Nobel Laureate in Physics, wrote that "huge discoveries are really the result of giant collaborations."  While an analogy between face recognition and fingerprints is imperfect, it should be pointed out that, with such technologies, their effectiveness increases exponentially with the size, access, and organization of the data set.  Ideally, an international conference would establish generally agreed upon standards of face recognition and other computer vision testing, archiving of data, and dissemination of information.  A major art institution or body of institutions might host a system-wide database and website that makes these computer vision programs available.  Participating institutions would make it standard curatorial practice to scan all images, whether during initial acquisition or later collection development, and make this information available on the same website (which would be linked to but independent of the participating institutions' own websites).  This common platform would thus have an ever-growing database as well as the potential to host links to the participating institutions' websites.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body {
  background: white !important;
}
#home {
  height: 100%;
  width: 100%;
}
.text-body {
  background: white;
  padding-left: 20%;
  padding-right: 20%;
  padding-top: 10px;
  padding-bottom: 50px;
  text-align: center;
}
.text-body p {
  text-align: justify;
  color: #626262;
}
.text-body h2 {
  padding-top: 50px;
}
#people-container {
  background: #111;
  padding-left: 20%;
  padding-right: 20%;
  text-align: center;
  padding-bottom: 50px;
}
#people-container h2 {
  color: white;
}
.person-card {
  max-height: 500px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
}
.person-card h2 {
  color: black !important;
}
.person {
  width: 100%;
}
.person-text-container {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background: white;
}
.title {
  font-weight: 800;
  padding-top: 50px;
  margin-bottom: 50px;
}
</style>
