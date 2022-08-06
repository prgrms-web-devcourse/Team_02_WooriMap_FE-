import {
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
  useEffect,
} from 'react';
import { ICoordinates, IMapMarker, ISetValueState } from 'types';
import { getBounds, parseMarkers } from './helper';

interface IReturnType {
  markers: IMapMarker[];
  getSearchResults: (keyword: string) => void;
  setBounds: (data: ICoordinates[]) => void;
  onSelectMarker: any;
}

function useMapSearch(
  map: kakao.maps.Map | null,
  setSelected: Dispatch<SetStateAction<IMapMarker>>,
): IReturnType {
  const [services, setServices] = useState<kakao.maps.services.Places | null>(
    null,
  );
  const [markers, setMarkers] = useState<IMapMarker[]>([]);

  const setBounds = useCallback(
    (data: ICoordinates[]) => {
      const bounds = getBounds(data);
      map?.setBounds(bounds);
    },
    [map],
  );

  const getSearchResults = useCallback(
    (keyword: string) => {
      if (!services) return;

      services.keywordSearch(keyword, (data, status) => {
        if (status !== kakao.maps.services.Status.OK) {
          setMarkers([]);
          return;
        }

        const results = parseMarkers(data);

        setMarkers(results);
        setBounds(
          results.map(({ position }) => ({
            latitude: position.latitude,
            longitude: position.longitude,
          })),
        );
      });
    },
    [services, setBounds],
  );

  const onSelectMarker = ({
    marker,
    onChanged,
  }: {
    marker: IMapMarker;
    onChanged: any;
  }) => {
    const { position } = marker;
    const { latitude: lat, longitude: lng } = position;
    const latlng = new kakao.maps.LatLng(lat, lng);

    setSelected(() => ({ ...marker }));
    onChanged({
      name: 'position',
      value: { latitude: lat, longitude: lng },
    });

    map?.setCenter(latlng);
    setMarkers(() => [marker]);
  };

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    setServices(ps);
  }, [map]);

  return { markers, getSearchResults, setBounds, onSelectMarker };
}

export default useMapSearch;
