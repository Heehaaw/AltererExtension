(document.querySelector('#main-panel > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(6)')
    || {}
).innerHTML = 90;

const select = (row, col) => document.querySelector(
    `#main-panel > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child(7) > td > table > tbody > tr:nth-child(${row}) > td:nth-child(${col})`)
    || {};

select(25, 2).innerHTML = '26.11.2019';
select(25, 9).innerHTML = 'A';
select(25, 10).innerHTML = 'Z';
select(25, 11).innerHTML = 'B';

select(26, 2).innerHTML = '21.11.2019';
select(26, 9).innerHTML = 'A';
select(26, 11).innerHTML = 'C';

select(27, 2).innerHTML = '18.11.2019';
select(27, 9).innerHTML = 'A';
select(27, 10).innerHTML = 'Z';
select(27, 11).innerHTML = 'C';

select(28, 9).innerHTML = 'A';
select(28, 10).innerHTML = 'Z';
select(28, 11).innerHTML = 'E';

select(31, 2).innerHTML = '6.12.2019';
select(31, 9).innerHTML = 'A';
select(31, 10).innerHTML = 'Z';

select(38, 9).innerHTML = 'A';
select(38, 11).innerHTML = 'E';

select(39, 2).innerHTML = '5.1.2020';
select(39, 9).innerHTML = 'A';
select(39, 11).innerHTML = 'C';

select(40, 2).innerHTML = '<b>Získáno kreditů:</b> 30';

select(45, 9).innerHTML = 'A';
select(45, 10).innerHTML = 'Z';
select(45, 11).innerHTML = 'E';

select(56, 2).innerHTML = '<b>Získáno kreditů:</b> 30';
