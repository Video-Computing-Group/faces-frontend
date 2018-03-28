<template>
  <div id="home">
    <div class="text-body">
      <h2 class="title">Introduction</h2>
      <p>
        Before the nineteenth century, most portraits were, almost by definition, depictions of people who were important in their own worlds.  But, as a walk through almost any major art museum will show, a large number of these portraits from before the nineteenth century have lost the identities of their subjects through the fortunes of time.  Traditionally, identification of many of these portraits has been limited to often quite variable personal opinion.  Formed in 2011, the FACES project has undertaken the systematic application of face recognition technology to this highly subjective aspect of art history, establishing proof of concept, while at the same time retaining the human eye as the final arbiter.
      </p>
      <p>
        In the application of this technology to actual (that is, photographed) faces, a number of difficulties are inherent in a real or perceived alteration of appearance of the face through variations in age, lighting, angle of pose, facial hair, expression, and the very identity of the subject ("doubles"). With portraiture in sculpture, painting, and drawing, not only do all the problems that apply to photographed subjects pertain but these works of art also have their own additional challenges. Most notably, portrait art does not provide what might be called a photographic likeness but rather one that goes through a process of visual interpretation on the part of the artist. 
      </p>

      <h2 class="title">FACES 1.0</h2>
      <p>
        In the hope of addressing the challenges mentioned above, the FACES research team sought and received two grants from the National Endowment for the Humanities, grants whose two years (2012-2014) of support allowed us to establish proof of concept of our project.  Briefly put, what proof of concept meant was addressing four main areas: identifying the issues, establishing the basic methodology, applying the FACES algorithm that is the core of this methodology to a particular set of paradigms in order to establish the initial parameters of the technology, and, finally, applying the FACES algorithm to a body of chosen "identifications." (We use the term "paradigm" here to mean a logically chosen body of related images directed toward a particular demonstrative end--small study groups of images.)
      </p>
      <p>
        Identifying the issues as the first step in establishing proof of concept meant not only recognizing the limits imposed by age, lighting, angle of pose, facial hair, expression, and so on, but also addressing the lack of an established data set of processed images of works of portrait art with which to conduct our research.  Such a data set is used to establish standards of probable match or non-match: the larger the data set, the greater the accuracy of the testing, such a lack being something that is not the case with mainstream face recognition applications today (that is, for actual photographed faces).
      </p>
      <p>
        As to the second step, the basic methodology, initial research indicated that, given the particular demands of this first general study of the application of face recognition technology to portrait art, two key methods worked best: the computation of anthropometric distances and of local features.  With anthropometric distances, we measured a network of very fine distances, both horizontal and vertical, throughout the face.  Through painstaking experimental trial and error, we established a feature set (the most effective body of identifying features) of eleven possible measurements, such as the width between the eyes and the width of the mouth.  With local features, we assessed the characteristics of the edges of features, such as the corners of the eyes and the corners of the mouth.  Here, we identified a feature set of twenty-two different features or landmark points, as they are called. These were marked on a generic face mesh that was "registered" onto the image being studied and the landmark points were then quantified through the use of Gabor filters (a technique that analyses edge gradients of these landmark points at eight orientations along five scales, comprising a set with a total of forty different readings at each point). This constituted the core of the FACES algorithm.
      </p>
      <p>
        The third step in establishing proof of concept was the application of the developing FACES algorithm to a particular set of paradigms in order to establish the initial parameters of this technology to works of portrait art (death masks tested against sculptures, sculptures against paintings, paintings against drawings, images of the sitter by the same artist, images of the sitter by different artists, different ages of the same sitter, and so on).
      </p>
      <p>
        The final step that concerned us was the application of the developing FACES algorithm to a series of interesting and sometimes important "identifications" (portraits whose identities were questioned: for example, Mary Queen of Scots, Battista Sforza, Botticelli's Portrait of a Lady at the Window, Verrocchio's Lady with Flowers, Nicholas Hilliard's Young Man Among Roses, and perhaps the earliest known likeness of Galileo Galilei).
      </p>
      <p>
        In the end, FACES 1.0 was very successful but the actual process of testing images was cumbersome and was not something that could easily be undertaken by any but the most experienced.
      </p>
      <p>
        At the end of our NEH funded project, we concluded that we needed an automated FACES.
      </p>

      <h2 class="title">FACES 2.0</h2>
      <p>
        At the start of the project to automate FACES--FACES 2.0, funded by the Samuel H. Kress Foundation (2016-2018), a project that enabled us to make FACES available to the public--the decision was made to completely redesign the program.  The specific applications of feature extraction mentioned above were dropped entirely in favor of the wholly different method of machine learning known as deep neural networks.  The key issue in restoring lost identities to works of portrait art, however, remained the initial one: how to test one portrait against another, both of which were subject to the subjectivity of artistic interpretation--all of this being dependent, of course, upon the method, ability, and intentions of the individual artist.
      </p>
      <p>
        Deep neural networking is a form of artificial intelligence that attempts to mimic the thought process of the human brain.  Rather than depending on the specific application of a body of highly specific anthropometric distances and local features as with FACES 1.0, this technology is able to analyze portrait imagery in a more flexible way, taking a larger number of features into consideration and analyzing them in a more nuanced way.  Although the computer is trained with labelled (known) images as with FACES 1.0, deep neural networking builds its own feature set through a process of layered analysis, one that is more accurate than the feature extraction of FACES 1.0.
      </p>
      <p>
        In this, we leveraged the state-of-the-art face recognition framework VGG-16 to learn (to teach the computer) the parameters for distinguishing between a given pair of works of portrait art.  Because deep neural networking requires very large amounts of training data, and because we are at a very early stage of research on the application of face recognition technology to works of portrait art, we were limited by the size of the original portrait dataset we could employ.  To address this issue, we used a sequence of two training modules.
      </p>
      <p>
        In the first module, we trained a classifier network (a deep learning module that can classify the image of a face into one of the classes defined by the user, a class being the body of facial signifiers that comprise the portrait of a given individual) using an augmented dataset created by casting the style of our original portrait dataset onto an existing dataset.  We trained this classifier network using 20k images across 131 classes.
      </p>
      <p>
        In the second module, we utilized our original portrait dataset to train a Siamese network (a network that employs two Convolutional Neural Network (CNN) models running in parallel with the parameters of the classifier we trained in first module) in order to learn (again, to teach the computer) the similarity between the pairs of images.  The reason for using the parameters from the classifier network is to have a better starting point for learning the images that were subject to artistic creativity.  Since the classifier is trained on a larger body of style transferred images, it captures the variation and style of the portrait. In this way, while training the Siamese Network, it better learns the features appropriate to distinguish the original portraits.
      </p>

    </div>
    <div id="people-container">
      <h2 class="title">The FACES 1.0 Teams</h2>
      <div class="row">
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Conrad Rudolph</h2>
            <p>Professor, Department of the History of Art</p>
            <p>Project Director and Principal Investigator</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Amit Roy-Chowdhury</h2>
            <p>Professor, Department of Electrical Engineering, University of California, Riverside</p>
            <p>Computer vision and image processing expert</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Ramya Srinivasan</h2>
            <p>Doctoral Student, Department of Electrical Engineering, University of California, Riverside</p>
            <p>Computer vision and image processing research</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Jeanette Kohl</h2>
            <p>Associate Professor, Department of the History of Art</p>
            <p>An authority on portraiture and the face in art</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-body">
      <h2 class="title">The FACES 1.0 Publications</h2>
      <p>
        The FACES project was a collaboration of the humanities (art history) and the sciences (computer science). The 2017 article below presents FACES from the point of view of the humanities, that is, the general issues involved in the application of face recognition technology to works of portrait art, how this technology generally works, what the parameters of its application to portrait art are at the current time, what its potential advantages are, and so on.  The 2015 article presents FACES from the computer science angle, though this program, FACES 1.0, is now surpassed by FACES 2.0.  Both papers are meant to operate as a pair.
      </p>
      <p><em><small>
        Conrad Rudolph, Amit Roy-Chowdhury, Ramya Srinivasan, and Jeanette Kohl, "FACES: Faces, Art, and Computerized Evaluation Systems--A Feasibility Study of the Application of Face Recognition Technology to Works of Portrait Art," Artibus et Historiae 75 (2017) 265-291.
      </small></em></p>
      <p><em><small>
        Ramya Srinivasan, Conrad Rudolph, and Amit Roy-Chowdhury, "Computerized Face Recognition in Renaissance Portrait Art," Signal Processing Magazine 32:4 (July 2015) 85-94.
      </small></em></p>
    </div>
    <div id="people-container">
      <h2 class="title">The FACES 2.0 Teams</h2>
      <div class="row">
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Conrad Rudolph</h2>
            <p>Professor, Department of the History of Art</p>
            <p>Project Director and Principal Investigator</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Amit Roy-Chowdhury</h2>
            <p>Professor, Department of Electrical Engineering, University of California, Riverside</p>
            <p>Computer vision and image processing expert</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Akash Gupta</h2>
            <p>Masters Student, Department of Electrical Engineering, University of California, Riverside</p>
            <p>Computer vision and image processing research</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>Niluthpol Chowdhury Mithun</h2>
            <p>Doctoral Student, Department of Electrical Engineering</p>
            <p>Computer vision and image processing assistance</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
        <div class="col-md-4 person-card">
          <div class="person-text-container">
            <h2>John Pham</h2>
            <p>Undergradute Student, Department of Computer Science and Engineering</p>
            <p>Front-end developer</p>
            <p><small>University of California, Riverside</small></p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-body">
      <h2 class="title">The FACES 2.0 Publications</h2>
      <p><em><small>
        Coming soon
      </small></em></p>
    </div> -->
  </div>
</template>

<script>
export default {}
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
    padding-top: 10px;
    padding-bottom: 10px;
    background: white;
}
.title {
    font-weight: 800;
    padding-top: 50px;
    margin-bottom: 50px;
}
</style>
