export function initTitle() {
    this.titleDiv = this.controls.wrap
        .insert('div', '*')
        .attr('class', 'title')
        .style('margin-right', '1em')
        .style('margin-bottom', '1em');

    this.titleDiv
        .append('span')
        .text(this.config.title)
        .style('font-size', '1.5em')
        .style('font-weight', 'strong')
        .style('display', 'block');
}
