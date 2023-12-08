import { ConsumptionUnity, DataType, IEnergy } from '../interfaces'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const KWH_PRICE = 0.083

export function filterDataByStartAndEndDate(
    data: [number, number][],
    timezone: string,
    startDate: Dayjs | null,
    endDate: Dayjs | null,
) {
    if (!startDate?.isValid() || !endDate?.isValid()) {
        return data
    }

    return data.filter(
        (dataPoint) =>
            dayjs.utc(dayjs.unix(dataPoint[0] / 1000)).tz(timezone) > startDate &&
            dayjs.utc(dayjs.unix(dataPoint[0] / 1000)).tz(timezone) < endDate,
    )
}

export function formatChartData(
    rawData: IEnergy[],
    timezone: string,
    startDate: Dayjs | null,
    endDate: Dayjs | null,
    unity: ConsumptionUnity,
) {
    const labels = filterDataByStartAndEndDate(rawData[0].data, timezone, startDate, endDate).map((e) =>
        dayjs
            .utc(dayjs.unix(e[0] / 1000))
            .tz(timezone)
            .format('DD/MM/YYYY'),
    )
    const datasets = []

    for (const equipment of rawData) {
        const { label, type, data: energy, color } = equipment
        if (type !== DataType.TOTAL) {
            datasets.push({
                label,
                backgroundColor: color,
                data: filterDataByStartAndEndDate(energy, timezone, startDate, endDate).map((e) =>
                    unity === ConsumptionUnity.EUROS ? (e[1] / 1000) * KWH_PRICE : e[1] / 1000,
                ),
            })
        }
    }

    return { labels, datasets }
}
