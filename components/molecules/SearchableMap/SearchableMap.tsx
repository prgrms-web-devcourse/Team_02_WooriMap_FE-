import { useState } from 'react';
import { useMapSearch } from 'hooks';
import { IMapMarker, HandleChangeTypes, ICoordinates } from 'types';
import { Map, SearchBar, MultiMarkerDrawer } from 'components';
import { setInitialPositionState } from './helper';
import * as S from './SearchableMap.styles';

interface ISearchableMapProps {
  position: ICoordinates;
  handleChange: HandleChangeTypes;
  error: boolean;
}

export function SearchableMap({
  position,
  handleChange,
  error,
}: ISearchableMapProps) {
  const { initialMarker, initialMapCenter } = setInitialPositionState({
    marker: {
      position: { ...position },
      content: '',
    },
  });

  const [selected, setSelected] = useState<IMapMarker>({
    content: '',
    position,
  });
  const [isResultVisible, setIsResultVisible] = useState<boolean>(false);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);
  const { markers, getSearchResults, onSelectMarker } = useMapSearch({
    initialMarker,
    map,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    getSearchResults(value);
    setSelected((prev) => ({ ...prev, content: value }));
    setIsResultVisible(() => true);
  };

  const onClickMarker = () => (marker: IMapMarker) => {
    onSelectMarker({ marker, handleChange, setSelected });
    setIsResultVisible(() => false);
  };

  return (
    <>
      {error && (
        <div style={{ color: 'red' }}>지도만 errorProp이 Boolean 입니다!</div>
      )}
      <S.Container>
        <SearchBar
          keyword={selected.content}
          isResultVisible={isResultVisible}
          onChange={onChange}
          onClick={onClickMarker()}
          results={markers}
        />
        <Map
          width="100%"
          height="100%"
          isMain={false}
          onCreate={setMap}
          center={{ ...initialMapCenter }}
        >
          <MultiMarkerDrawer markers={markers} onClick={onClickMarker()} />
        </Map>
      </S.Container>
    </>
  );
}
