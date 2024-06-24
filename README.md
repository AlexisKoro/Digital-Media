# Digital-Media
Anglais
Step 1: Video transcoding on GPU-powered servers

We're going to use GPU servers to accelerate video transcoding. For this, we can use instances in AWS, Azure, or other Cloud providers. We're going to install FFmpeg, the leading multimedia framework that decodes, encodes, transcodes, mux, demux, stream, filters and more.

Here's an example of an FFmpeg command to transcode a video:

bash : 
ffmpeg -i ${source} \
  -pix_fmt yuv420p \
  -c:v libx264 \
  -b:v 600k -minrate:v 600k -maxrate:v 600k -bufsize:v 600k \
  -profile:v baseline -level 3.0 \
  -x264opts scenecut=0:keyint=75:min-keyint=75 \
  -hls_time 3
  -hls_playlist_type vod
  -r 25 \
  -vf scale=640:-2 \
  -an \
  -hls_segment_filename ../${base_name}/360p/360p_%06d.ts ../${base_name}/360p/360p.m3u8

Step 2: Storing transcoded videos

We'll store the transcoded videos in a content management system, such as Filerobot.

Step 3: Playback videos with a video player compatible with Adaptive Streaming

We'll use an HLS or DASH-compatible video player, such as Video.JS 7, MediaElement.js, Plyr, or DPlayer. Here's a sample code to integrate the video player into our web application (see HTML code)

Step 4: Defining the backend API

We're going to define a backend API to handle video conversion requests. Here's an example of code for a Node.js API (see Javascript code)

Translated with DeepL.com (free version)
Français
Étape 1 : Transcodage de la vidéo sur des serveurs alimentés par des GPU

Nous allons utiliser des serveurs GPU pour accélérer le transcodage des vidéos. Pour cela, nous pouvons utiliser des instances dans AWS, Azure, ou d'autres fournisseurs de Cloud. Nous allons installer FFmpeg, le principal framework multimédia qui décode, encode, transcode, mux, demux, stream, filtre, etc.

Voici un exemple de commande FFmpeg pour transcoder une vidéo :

bash : 
ffmpeg -i ${source} \
  -pix_fmt yuv420p \
  -c:v libx264 \
  -b:v 600k -minrate:v 600k -maxrate:v 600k -bufsize:v 600k \
  -profile:v baseline -level 3.0 \
  -x264opts scenecut=0:keyint=75:min-keyint=75 \
  -hls_time 3 \
  -hls_playlist_type vod \
  -r 25 \
  -vf scale=640:-2 \
  -an \
  -hls_segment_filename ../${base_name}/360p/360p_%06d.ts ../${base_name}/360p/360p.m3u8

Étape 2 : Stockage des vidéos transcodées

Nous allons stocker les vidéos transcodées dans un système de gestion de contenu, comme Filerobot.

Étape 3 : Lecture des vidéos avec un lecteur vidéo compatible avec le Streaming Adaptatif

Nous allons utiliser un lecteur vidéo compatible avec HLS ou DASH, comme Video.JS 7, MediaElement.js, Plyr, ou DPlayer. Voici un exemple de code pour intégrer le lecteur vidéo dans notre application web (voir le code HTML)

Étape 4 : Définition de l'API backend

Nous allons définir une API backend pour gérer les requêtes de conversion de vidéos. Voici un exemple de code pour une API en Node.js (voir le code Javascript)
