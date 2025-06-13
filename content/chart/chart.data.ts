import { ChartDataPoint } from "@cd/app/actions/charts";
import { cyderIColors } from "@cd/theme";
import { ThemeMode } from "@cd/theme/theme.manager";

export const lineChartconfig = (
  dataValue: ChartDataPoint[],
  mode: ThemeMode
) => ({
  data: dataValue,
  xField: "date",
  yField: "value",
  seriesField: "type",
  color: [cyderIColors(mode)?.success, cyderIColors(mode)?.danger],
  tooltip: {
    title: "member",
    items: ["type", "date", "value"],
  },
  axis: {
    x: {
      position: "bottom",
      title: "Date",
      titleFill: cyderIColors(mode)?.textSecondary,
      titleFontWeight: 500,

      grid: true,
      gridLineWidth: 2,
      gridStroke: cyderIColors(mode)?.textSecondary,

      line: true,
      lineLineWidth: 3,
      lineStroke: cyderIColors(mode)?.border,

      tick: true,
      tickLineWidth: 5,
      tickLength: 3,

      label: true,
      labelFontSize: 12,
      labelFill: cyderIColors(mode)?.textPrimary,
      labelFontWeight: 500,
    },

    y: {
      position: "left",

      title: "Points",
      titleFill: cyderIColors(mode)?.textSecondary,
      titleFontWeight: 500,

      grid: true,
      gridLineWidth: 1,
      gridStroke: cyderIColors(mode)?.textSecondary,

      line: true,
      lineLineWidth: 3,
      lineStroke: cyderIColors(mode)?.border,

      tick: true,
      tickLineWidth: 5,
      tickLength: 3,

      label: true,
      labelFontSize: 12,
      labelFill: cyderIColors(mode)?.textPrimary,
      labelFontWeight: 500,
    },
  },
  shapeField: "smooth",
  height: 350,
});
