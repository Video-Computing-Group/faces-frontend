<template>
  <div id="home">
    <hero />
    <text-body>
      <h2>HISTORY OF FACES</h2>
      <p>
        Before the nineteenth century, most portraits were, almost by definition, depictions of people who were important in their own worlds.  But, as a walk through almost any major art museum will show, a large number of these portraits from before the nineteenth century have lost the identities of their subjects through the fortunes of time.  Traditionally, identification of many of these portraits has been limited to often quite variable personal opinion.  Formed in 2011, the FACES project has undertaken the systematic application of face recognition technology to this highly subjective aspect of art history, establishing proof of concept, while at the same time retaining the human eye as the final arbiter.
      </p>
      <p>
        In the application of this technology to actual (that is, photographed) faces, a number of difficulties are inherent in a real or perceived alteration of appearance of the face through variations in age, lighting, angle of pose, facial hair, expression, and the very identity of the subject ("doubles").   With portraiture in sculpture, painting, and drawing, not only do all the problems that apply to photographed subjects pertain but these works of art also have their own additional challenges. Most notably, portrait art does not provide what might be called a photographic likeness but rather one that goes through a process of visual interpretation on the part of the artist.  It is an integration of this dynamic into the face recognition algorithm that distinguishes FACES from traditional face recognition processes.
      </p>
    </text-body>

    <text-body-image
      image="/static/shakespeare.jpg"
      color="secondary"
    >
      <template slot="caption">
        Portraits of and associated with William Shakespeare, some with identity believed certain, others with identity uncertain.
      </template>
      <h2>FACES 1.0</h2>
      <p>
        In the hope of addressing the challenges mentioned above, the FACES research team sought and received two grants from the National Endowment for the Humanities, grants whose two years (2012-2014) of support allowed us to establish proof of concept of our project.  Briefly put, what proof of concept meant was addressing four main areas: identifying the issues, establishing the basic methodology, applying the FACES algorithm that is the core of this methodology to a particular set of paradigms in order to establish the initial parameters of the technology, and finally applying the FACES algorithm to a body of chosen "identifications."  (We use the term "paradigm" here to mean a logically chosen body of related images directed toward a particular demonstrative end--small study groups of images.)
      </p>
      <p>
        Identifying the issues as the first step in establishing proof of concept meant not only recognizing the limits imposed by age, lighting, angle of pose, facial hair, expression, and so on, but also addressing the lack of an established data set of processed images of works of portrait art with which to conduct our research.  Such a data set is used to establish standards of probable match or non-match: the larger the data set, the greater the accuracy of the testing, such a lack being something that is not the case with mainstream face recognition applications today (that is, for actual photographed faces).
      </p>
      <image-inset image="/static/maryqueen.jpg">
        Different media — in this case, one portrait in chalk and the other in oil, both of Mary Queen of Scots and both by Francois Clouet — are sometimes read differently by FACES because of the potentially greater precision of face recognition technology over human eyesight.
      </image-inset>
      <p>
        As to the second step, the basic methodology, initial research indicated that, given the particular demands of this first general study of the application of face recognition technology to portrait art, two key methods worked best: the computation of anthropometric distances and of local features.  With anthropometric distances, we measured a network of very fine distances, both horizontal and vertical, throughout the face.  Through painstaking experimental trial and error, we established a feature set (the most effective body of identifying features) of eleven possible measurements, such as the width between the eyes and the width of the mouth.  With local features, we assessed the characteristics of the edges of features, such as the corners of the eyes and the corners of the mouth.  Here, we identified a feature set of twenty-two different features or landmark points, as they are called.  These were marked on a generic face mesh that was "registered" onto the image being studied and the landmark points were then quantified through the use of Gabor filters (a technique that analyses edge gradients of these landmark points at eight orientations along five scales, comprising a set with a total of forty different readings at each point).  This constituted the core of the FACES algorithm.
      </p>
      <p>
        The third step in establishing proof of concept was the application of the developing FACES algorithm to a particular set of paradigms in order to establish the initial parameters of this technology to works of portrait art (death masks tested against sculptures, sculptures against paintings, paintings against drawings, images of the sitter by the same artist, images of the sitter by different artists, different ages of the same sitter, and so on).
      </p>
      <p>
        The final step that concerned us was the application of the developing FACES algorithm to a series of interesting and sometimes important "identifications" (discussed below).
      </p>
      <p>
        In the end, FACES 1.0 was very successful but the actual process of testing images was cumbersome and was not something that could easily be undertaken by any but the most experienced.
      </p>
      <p>
        At the end of this NEH funded project, we concluded that we needed an automated FACES.
      </p>
    </text-body-image>

    <text-body-image image="/static/jamesscott.jpg">
      <template slot="caption">
        The portrait on the left received probably match scores with the two known portraits of James Scott on the right, supporting previous opinion that the first portrait represents Scott with his head put back in place after it had been chopped off after attempting to seize the throne from his uncle, James II.
      </template>
      <h2>FACES 2.0</h2>

      <p>
        At the start of the project to automate FACES--FACES 2.0, funded by the Samuel H. Kress Foundation (2016-2018), a project that enabled us to make FACES available to the public--the decision was made to completely redesign the program.  The specific applications of feature extraction mentioned above were dropped entirely in favor of the wholly different method of machine learning known as deep neural networks.  The key issue in restoring lost identities to works of portrait art, however, remained the initial one: how to test one portrait against another, both of which were subject to the subjectivity of artistic interpretation--all of this being dependent, of course, upon the method, ability, and intentions of the individual artist.
      </p>
      <image-inset image="/static/isaacnewton.jpg">
        Age differences of around 10 years are usually not too much of an obstacles for FACES, depending on the age of the sitter — these two portraits of Isaac Newton of twenty-nine years apart received strong match scores.
      </image-inset>
      <p>
        Deep neural networking is a form of artificial intelligence that attempts to mimic the thought process of the human brain.  Rather than depending on the specific application of a body of highly specific anthropometric distances and local features as with FACES 1.0, this technology is able to analyze portrait imagery in a more flexible way, taking a larger number of features into consideration and analyzing them in a more nuanced way.  Although the computer is trained with labelled (known) images as with FACES 1.0, deep neural networking builds its own feature set through a process of layered analysis, one that is more accurate than the feature extraction of FACES 1.0.
      </p>
      <p>
        In this, we leveraged the state-of-the-art face recognition framework VGG-16 to learn (to teach the computer) the parameters for distinguishing between a given pair of works of portrait art.  Because deep neural networking requires very large amounts of training data, and because we are at a very early stage of research on the application of face recognition technology to works of portrait art, we were limited by the size of the original portrait dataset we could employ.  To address this issue, we used a sequence of two training modules.
      </p>
      <p>
        In the first module, we trained a classifier network (a deep learning module that can classify the image of a face into one of the classes defined by the user, a class being the body of facial signifiers that comprise the portrait of a given individual) using an augmented dataset created by casting the style of our original portrait dataset onto an existing dataset.  We trained this classifier network using 20,000 images across 131 classes.
      </p>
      <image-inset image="/static/">
        Life mask casting of a known individual compared to a painted portrait of the same individual, Pope Leo X.
      </image-inset>
      <p>
        In the second module, we utilized our original portrait dataset to train a Siamese network (a network that employs two Convolutional Neural Network models running in parallel with the parameters of the classifier we trained in first module) in order to learn (again, to teach the computer) the similarity between the pairs of images.  The reason for using the parameters from the classifier network is to have a better starting point for learning the images that were subject to artistic creativity.  Since the classifier is trained on a larger body of style transferred images, it captures the variation and style of the portrait. In this way, while training the Siamese Network, it better learns the features appropriate to distinguish the original portraits.
      </p>
      <image-inset image="/static/">
        Sculptural portrait of a known individual compared to a painted portrait of the same individual, Cardinal Richelieu.
      </image-inset>
      <p>
        During the identification testing phases of both FACES 1.0 and 2.0, we tested a number of interesting and sometimes important portraits.  In this, we do not claim that we are providing the incontestable identity of the sitter in question, only that the similarity score of a given pair of portraits does or does not fall within the distribution of match or non-match scores for the subjects.  Some of these tests were done on our own initiative (and typically represent the positive confirmation of disputed traditional claims), while others were suggested to us by the interested public (professionals of one kind or another).  Among these images were portraits that tested as having a strong probability of representing Lorenzo de'Medici, Smeralda Brandini (in portraits by Botticelli and Verrocchio), portraits associated with Lucrezia Borgia, a very interesting portrait of Mary Queen of Scots, the famous Elizabethan miniature Young Man among Roses by Nicholas Hilliard, James Scott (first duke of Monmouth, first duke of Buccleuch, and illegitimate son of Charles II--apparently with his head put back in place after it had been chopped off after attempting to seize the throne from his uncle, James II), and what now appears to be the earliest known portrait of Galileo Galilei.
      </p>
    </text-body-image>

    <text-body-image image="/static/robertdeveraux.jpg" color="secondary">
      <template slot="caption">
        FACES supports the idea that Young Man Among Roses (the first image)--said to be "perhaps the most famous miniature ever painted"--represents Robert Devereux, a favorite of Queen Elizabeth I.
      </template>

      <team />

    </text-body-image>
    
  </div>
</template>

<script>
import Hero from './Hero'
import TextBody from './TextBody'
import TextBodyImage from './util/TextBodyImageOffset'
import ImageInset from './util/ImageInset'
import Team from './util/Team'

export default {
  components: {
    Hero,
    TextBodyImage,
    TextBody,
    ImageInset,
    Team
  }
};
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
.title {
  font-weight: 800;
  padding-top: 50px;
  margin-bottom: 50px;
}
</style>
