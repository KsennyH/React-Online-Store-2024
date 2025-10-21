import { JSX, useEffect, useRef } from 'react';
import './YandexMap.css';

function YandexMap(): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (window.ymaps) {
      window.ymaps.ready(initMap);
    } else {
      
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.type = 'text/javascript';
      script.onload = () => window.ymaps.ready(initMap);
      document.head.appendChild(script);
    }

    function initMap() {
      if (!mapRef.current) return;

      const map = new window.ymaps.Map(mapRef.current, {
        center: [57.007897, 40.967201],
        zoom: 14,
        controls: ['zoomControl', 'fullscreenControl']
      });

      const placemark = new window.ymaps.Placemark(
        [57.007897, 40.967201],
        {
          hintContent: 'Мотосалон "Мотомир"',
          balloonContent: `
            <div class="balloon">
                <div class="balloon__title"}>
                    <h3>Мотомир</h3>
                </div>
                <div class="balloon__info"> 
                    <p>Офис мотосалона «Мотомир» в Иванове</p>
                    <p><a href="tel:+74932134581">+7 (4932) 134-581</a></p>
                    <p><a href="mailto:motomirIvanovo@email.com">motomirIvanovo@email.com</a></p>
                </div>
            </div>
          `
        },
        {
          preset: 'islands#greenDotIcon'
        }
      );

      map.geoObjects.add(placemark);
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: '12px' }} />;
};

export default YandexMap;
