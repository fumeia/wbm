import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const VisualizationFrame = () => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const svg = d3.select(ref.current);
      const width = 500;
      const height = 200;
      const margin = { top: 20, right: 20, bottom: 30, left: 40 };

      svg.attr('width', width).attr('height', height);

      const x = d3
        .scaleLinear()
        .domain([0, 10])
        .range([margin.left, width - margin.right]);

      const y = d3
        .scaleLinear()
        .domain([-1, 1])
        .range([height - margin.bottom, margin.top]);

      const line = d3
        .line<{ x: number; y: number }>()
        .x((d) => x(d.x))
        .y((d) => y(d.y));

      const data = d3.range(0, 10, 0.1).map((i) => ({ x: i, y: Math.sin(i) }));

      svg
        .append('g')
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

      svg
        .append('g')
        .attr('transform', `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);
    }
  }, []);

  return <svg ref={ref} />;
};

export default VisualizationFrame;