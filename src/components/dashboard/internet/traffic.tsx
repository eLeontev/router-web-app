import React from 'react';
import { useRecoilValue } from 'recoil';
import './traffic.scss';

import { TrafficGraph } from './traffic-graph';
import { TrafficTiming } from './traffic-timing';

import { speedTrafficState } from '../../../recoil-state/internet.state';
import { useGetTranslatedLabels } from '../../../services/i18n.service';

import { trafficType } from '../../../constants/cards.constants';

import { Traffic } from '../../../models/dashboard.model';
import { cardsLabels } from '../../../models/cards.model';

export const getTrafficValue = ({ unit, value }: { unit: string; value: any }) =>
    `${value} ${unit}`;
export const getTrafficModifier = (type: trafficType) => `traffic__${type}`;

export const TrafficRenderer = React.memo(({ type, max }: Traffic) => {
    // https://github.com/facebookexperimental/Recoil/issues/12
    const { upload, download } = useRecoilValue(speedTrafficState);
    const trafficValue = type === trafficType.upload ? upload : download;
    const [trafficTypeLabel, unit] = useGetTranslatedLabels([
        type === trafficType.upload ? cardsLabels.upload : cardsLabels.download,
        trafficValue.unit,
    ]);

    return (
        <section className={`traffic ${getTrafficModifier(type)}`}>
            <section className="traffic-info">
                <section className="traffic-info_actual">
                    <span className="traffic-info_actual-type">{trafficTypeLabel}: </span>
                    <span className="traffic-info_actual-value">
                        {getTrafficValue({ unit, value: trafficValue.value })}
                    </span>
                </section>
                <section className="traffic-info_max-speed">
                    {getTrafficValue({ unit, value: max.value })}
                </section>
            </section>
            <TrafficGraph max={max} current={trafficValue} isUpload={type === trafficType.upload} />
            <TrafficTiming />
        </section>
    );
});
