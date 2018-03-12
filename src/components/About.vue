<template>
  <div id="home">
    <div class="text-body">
      <h2>Introduction</h2>
      <p>
        Before the nineteenth century, most portraits were, almost by definition, depictions of people who were important in their own worlds.  But, as a walk through almost any major art museum will show, a large number of these portraits from before the nineteenth century have lost the identities of their subjects through the fortunes of time.  Traditionally, identification of many of these portraits has been limited to often quite variable personal opinion.  Formed in 2011, the FACES project has undertaken the systematic application of face recognition technology to this highly subjective aspect of art history, establishing proof of concept, while at the same time retaining the human eye as the final arbiter.
      </p>
      <p>
        In the application of this technology to actual (that is, photographed) faces, a number of difficulties are inherent in a real or perceived alteration of appearance of the face through variations in age, lighting, angle of pose, facial hair, expression, and the very identity of the subject ("doubles").   With portraiture in sculpture, painting, and drawing, not only do all the problems that apply to photographed subjects pertain but these works of art also have their own additional challenges.   Most notably, portrait art does not provide what might be called a photographic likeness but rather one that goes through a process of visual interpretation on the part of the artist.
      </p>

      <h2>FACES 1.0</h2>
      <p>
        In the hope of addressing the challenges mentioned above, the FACES research team sought and received two grants from the National Endowment for the Humanities, grants whose two years (2012-2014) of support allowed us to establish proof of concept of our project.  Briefly put, what proof of concept meant was addressing four main areas: identifying the issues, establishing the basic methodology, applying the FACES algorithm that is the core of this methodology to a particular set of paradigms in order to establish the initial parameters of the technology, and, finally, applying the FACES algorithm to a body of chosen "identifications."  (We use the term paradigm here to mean a logically chosen body of related images directed toward a particular demonstrative end--small study groups of images.)
      </p>
      <p>
        Identifying the issues as the first step in establishing proof of concept meant not only recognizing the limits imposed by age, lighting, angle of pose, facial hair, expression, and so on, but also addressing the lack of an established data set of processed images of works of portrait art with which to conduct our research.  Such a data set is used to establish standards of probable match or non-match: the larger the data set, the greater the accuracy of the testing, such a lack being something that is not the case with mainstream face recognition applications today (that is, for actual photographed faces).
      </p>
      <p>
        As to the second step, the basic methodology, initial research indicated that, given the particular demands of this first general study of the application of face recognition technology to portrait art, two key methods worked best: the computation of anthropometric distances and of local features.  With anthropometric distances, we measured a network of very fine distances, both horizontal and vertical, throughout the face.  Through painstaking experimental trial and error, we established a feature set (the most effective body of identifying features) of eleven possible measurements, such as the width between the eyes and the width of the mouth.  With local features, we assessed the characteristics of the edges of features, such as the corners of the eyes and the corners of the mouth.  Here, we identified a feature set of twenty-two different features or landmark points, as they are called.  These were marked on a generic face mesh that was "registered" onto the image being studied and the landmark points were then quantified through the use of Gabor filters (a technique that analyses edge gradients of these landmark points at eight orientations along five scales, comprising a set with a total of forty different readings at each point).  This constituted the core of the FACES algorithm.
      </p>
      <p>
        The third step in establishing proof of concept was the application of the developing FACES algorithm to a particular set of paradigms in order to establish the initial parameters of this technology to works of portrait art (death masks tested against sculptures, sculptures against paintings, paintings against drawings, different ages of the same sitter, the sitter by different artists, and so on).
      </p>
      <p>
        The final step that concerned us was the application of the developing FACES algorithm to a series of interesting and sometimes important "identifications" (portraits whose identities were questioned: for example, Mary Queen of Scots, Battista Sforza, Botticelli's Portrait of a Lady at the Window, Verrocchio's Lady with Flowers, Nicholas Hilliard's Young Man Among Roses, and perhaps the earliest known likeness of Galileo Galilei).
      </p>
      <p>
        In the end, FACES 1.0 was very successful but the actual process of testing images was cumbersome and was not something that could be easily undertaken by any but the most experienced.
      </p>
      <p>
        At the end of our NEH funded project, we concluded that we needed an automated FACES.
      </p>

      <h2>FACES 2.0</h2>
      <p>
        At the start of the project to automate FACES--FACES 2.0, funded by the Samuel H. Kress Foundation (2016-2018), a project that enabled us to make FACES available on the website of the Frick Art Reference Library of Frick Collection--the decision was made to completely redesign the program.  The specific applications of feature extraction mentioned above were dropped entirely in favor of the wholly different method of machine learning known as deep neural networks.  The key issue in restoring lost identities to works of portrait art, however, remained the initial one: how to test one portrait against another, both of which were subject to the subjectivity of artistic interpretation--all of this being dependent, of course, upon the method, ability, and intentions of the individual artist.
      </p>
      <p>
        With this technology, we leverage the state-of-the-art face recognition framework VGG-16 to learn the parameters to distinguish between a pair of portraits.  However, to train a deep network to learn these parameters we require hundreds of labelled images - the portraits for which we know the identity of the sitter. But due to the limited number of portraits available and the authenticity of the portraits it is difficult to procure a large dataset that can be used to learn these parameters. To address this issue, we use a two-step training module.
 In this module we first train a classifier network using a augmented dataset created by casting the style of our portraits dataset on an existing dataset. We train this classifier using 20k images across 131 classes. A classifier network is a deep learning module which can classify the face image into one of the classes defined by the user. A class here refers to the face image of a person.
      </p>
      <p>
        Secondly, we utilize the authentic dataset procured by our team to train a Siamese network to learn the similarity between the pairs of images. As the name suggests, Siamese network is two Convolutional Neural Network (CNN) models running in parallel with the parameters of the classifier we trained in first module. The reason of using the parameters from the trained classifier is to have a initial parameters which best describes the styled transferred dataset resembling art images. Thus, when a Siamese Network is learned, it performs better than classification task. <**need information>. Following our the classifier network which shows how we are extracting features using CNN.
      </p>

      <h2>The FACES Teams and Publications</h2>
    </div>
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
</style>
