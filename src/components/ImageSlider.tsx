import React, { useState, useEffect } from "react";
import { Grid, Typography, IconButton, Box } from "@mui/material";
import { PlayArrow, Pause, ChevronLeft, ChevronRight } from '@mui/icons-material';


// props
interface Image {
  id: number;
  url: string;
  title: string;
  description: string;
}

//images
const images: Image[] = [
  {
    id: 1,
    url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    title: "Nature Love",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ",
  },
  {
    id: 2,
    url: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    title: "Nature Love",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 3,
    url: "https://media.istockphoto.com/id/1283852667/photo/touch-of-fresh-moss-in-the-forest.jpg?s=612x612&w=0&k=20&c=I91IV_It_xDEUlUCOg9hcoEw83ym7Q2-1hsCXtO-l7A=",
    title: "Nature Love",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially ",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Nature Love",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially",
  },
];


const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = useState(false);

  useEffect(() => {
    let slideshowTimer: NodeJS.Timeout;
    if (isSlideshowPlaying) {
      slideshowTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(slideshowTimer);
  }, [isSlideshowPlaying, setCurrentImageIndex]);

  //function for previousClick
  const handlePreviousClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsSlideshowPlaying(false);
  };

   //function for nextClick
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsSlideshowPlaying(false);
  };

   //function for playButton
  const handlePlayPauseClick = () => {
    setIsSlideshowPlaying((prevValue) => !prevValue);
  };

   //function for Tumbnail
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsSlideshowPlaying(false);
  };

  return (

    <Box sx={{ width: 1450, height: 700, backgroundColor: '#e8e8e8', marginLeft:5, borderRadius:2 }}>

      <Grid container direction="row" justifyContent="flex-end"alignItems="baseline"paddingRight={'540px'} marginTop={'30px'} color={'#707070'}>
        <Typography variant="h5" gutterBottom >
          {images[currentImageIndex].title}
        </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <img src={images[currentImageIndex].url} alt={images[currentImageIndex].title} style={{ height: '375px', width: '650px', borderRadius: '25px' }} />
        </Grid>

        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body1" style={{ width: '600px', color: '#B4B3B3', height: '350px' }} >{images[currentImageIndex].description}</Typography>
        </Grid>
     </Grid>

      <Grid xs display="flex" justifyContent="center" alignItems="center" gap={'20px'} marginTop={'30px'} >
        <IconButton style={{ width: '25px', height: '40px', color: 'black' }} aria-label="previous" onClick={handlePreviousClick}>
          <ChevronLeft />
        </IconButton>
        {images.map((image, index) => (
          <img src={image.url} alt={image.title} style={{ top: '864px', left: '75px', width: '205px', height: '171px', borderRadius: '20px', filter: index === currentImageIndex ? "none" : "grayscale(100%)" }}
            onClick={() => handleThumbnailClick(index)} />
        ))}
        <IconButton style={{ width: '25px', height: '40px', color: 'black' }} aria-label="next" onClick={handleNextClick}>
          <ChevronRight />
        </IconButton>
        <IconButton style={{ backgroundColor: "#25BEDA", width: '70px', height: '70px', opacity: "1" }} aria-label="play/pause" onClick={handlePlayPauseClick}>
          {isSlideshowPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Grid>
    </Box>
  )
}
export default ImageSlider;