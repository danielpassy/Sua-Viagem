import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import api from '@api';
import { Typography } from '@mui/material';

export default function DestinationCarousel() {
  useEffect(() => {
    const apiCall = async () => {
      const suggestions = await api.misc.suggestions();
      setSuggestions(suggestions);
    };
    apiCall();
  }, []);

  const [suggestions, setSuggestions] = useState<Array<any>>([]);
  const [emblaRef] = useEmblaCarousel({}, [Autoplay()]);
  const slides = Array.from('0'.repeat(suggestions.length));

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <Typography variant="h5" component="h2">
                {suggestions[index]?.destination}
              </Typography>
              <Typography variant="body1" component="p">
                {suggestions[index]?.duration}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
