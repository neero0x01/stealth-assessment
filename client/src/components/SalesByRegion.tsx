import React, { useEffect } from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { countries } from '../fake-db/index';
import { useDispatch, useSelector } from 'react-redux';
import { getSalesByRegion } from '../store/reducers/salesByRegion.reducer';
export const SalesByRegion = (props: any) => {
  const { data } = useSelector((state: any) => state.salesByRegion);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getSalesByRegion());
  }, []);

  return (
    <div style={{ height: '500px', width: '100%' }}>
      {countries?.features && (
        <ResponsiveChoropleth
          data={data}
          features={countries.features}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          colors='nivo'
          domain={[0, 1000]}
          unknownColor='#666666'
          label='properties.name'
          valueFormat='.2s'
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          enableGraticule={true}
          graticuleLineColor='#dddddd'
          borderWidth={0.5}
          borderColor='#152538'
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: '#444444',
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000000',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
};
