//  from 2023-12-14 to 2023-12-20 data
const ourData = [
  {
    // ***************** 2023-12-20 BELOW ******************************
    timestamp: '2023-12-20 20:00:32.243',
    initDuration: '143.85',
    warmInvocationsDuration: ['1.99', '2.12', '2.86', '1.72'],
    day: '2023-12-20',
  },
  {
    timestamp: '2023-12-20 19:42:32.243',
    initDuration: '159.34',
    warmInvocationsDuration: ['1.78', '1.87', '2.01', '2.23'],
    day: '2023-12-20',
  },
  {
    timestamp: '2023-12-20 19:12:32.243',
    initDuration: '162.99',
    warmInvocationsDuration: ['2.04', '1.59', '2.21', '1.79', '1.34'],
    day: '2023-12-20',
  },
  {
    timestamp: '2023-12-20 18:25:25.243',
    initDuration: '188.92',
    warmInvocationsDuration: ['1.84', '1.70', '2.13', '1.97'],
    day: '2023-12-20',
  },
  {
    // ***************** 2023-12-19 BELOW ******************************
    timestamp: '2023-12-19 19:39:25.243',
    initDuration: '163.28',
    warmInvocationsDuration: ['2.02', '2.15', '2.89', '1.75'],
    day: '2023-12-19',
  },
  {
    timestamp: '2023-12-19 18:22:25.243',
    initDuration: '199.08',
    warmInvocationsDuration: ['1.80', '1.89', '2.25'],
    day: '2023-12-19',
  },
  {
    timestamp: '2023-12-19 17:59:25.243',
    initDuration: '172.37',
    warmInvocationsDuration: ['2.06', '1.61', '2.27', '1.83', '1.38', '1.99'],
    day: '2023-12-19',
  },
  {
    timestamp: '2023-12-19 17:45:25.243',
    initDuration: '198.34',
    warmInvocationsDuration: ['1.86', '1.72', '2.15'],
    day: '2023-12-19',
  },
  {
    timestamp: '2023-12-19 17:15:00.243',
    initDuration: '157.32',
    warmInvocationsDuration: ['2.39', '1.93', '1.59', '2.06'],
    day: '2023-12-19',
  },
  {
    timestamp: '2023-12-19 16:46:00.243',
    initDuration: '160.99',
    warmInvocationsDuration: ['1.49', '3.10', '2.01', '1.81', '1.26'],
    day: '2023-12-19',
  },
  {
    // ***************** 2023-12-18 BELOW ******************************
    timestamp: '2023-12-18 20:30:00.243',
    initDuration: '194.92',
    warmInvocationsDuration: ['1.97', '2.11', '2.85', '1.73'],
    day: '2023-12-18',
  },
  {
    timestamp: '2023-12-18 19:59:00.243',
    initDuration: '160.57',
    warmInvocationsDuration: ['1.82', '1.91', '2.05', '2.27'],
    day: '2023-12-18',
  },
  {
    timestamp: '2023-12-18 19:45:00.243',
    initDuration: '153.15',
    warmInvocationsDuration: ['2.08', '1.63', '2.29', '1.85', '1.40', '2.22'],
    day: '2023-12-18',
  },
  {
    timestamp: '2023-12-18 18:55:00.243',
    initDuration: '179.13',
    warmInvocationsDuration: ['1.88', '1.74', '2.17', '2.01'],
    day: '2023-12-18',
  },
  {
    timestamp: '2023-12-18 18:15:00.243',
    initDuration: '158.11',
    warmInvocationsDuration: ['1.61', '2.08'],
    day: '2023-12-18',
  },
  {
    timestamp: '2023-12-18 17:56:00.243',
    initDuration: '161.25',
    warmInvocationsDuration: ['1.51', '3.14', '2.05', '1.84', '1.28'],
    day: '2023-12-18',
  },
  {
    timestamp: '2023-12-18 17:37:04.243',
    initDuration: '166.83',
    warmInvocationsDuration: ['1.74', '1.98', '2.16', '1.61', '2.29'],
    day: '2023-12-18',
  },
  {
    // ***************** 2023-12-17 BELOW ******************************
    timestamp: '2023-12-17 19:32:04.243',
    initDuration: '174.68',
    warmInvocationsDuration: ['1.89', '2.21', '3.04', '1.78', '2.18'],
    day: '2023-12-17',
  },
  {
    timestamp: '2023-12-17 18:15:04.243',
    initDuration: '148.95',
    warmInvocationsDuration: ['2.45', '1.64', '2.12'],
    day: '2023-12-17',
  },
  {
    timestamp: '2023-12-17 17:46:19.243',
    initDuration: '159.42',
    warmInvocationsDuration: ['1.54', '3.22', '2.13', '1.91', '1.98', '1.34'],
    day: '2023-12-17',
  },
  {
    // ***************** 2023-12-16 BELOW ******************************
    timestamp: '2023-12-16 18:42:19.243',
    initDuration: '166.35',
    warmInvocationsDuration: ['1.24', '9.62', '2.45', '1.78', '3.19', '1.92'],
    day: '2023-12-16',
  },
  {
    timestamp: '2023-12-16 18:16:53.243',
    initDuration: '188.31',
    warmInvocationsDuration: ['1.54', '1.78', '2.13', '3.02'],
    day: '2023-12-16',
  },
  {
    timestamp: '2023-12-16 17:51:53.243',
    initDuration: '174.99',
    warmInvocationsDuration: ['2.35', '1.96', '1.45'],
    day: '2023-12-16',
  },
  {
    timestamp: '2023-12-16 17:33:53.243',
    initDuration: '158.29',
    warmInvocationsDuration: ['1.63', '3.18', '2.79', '1.94'],
    day: '2023-12-16',
  },
  {
    // ***************** 2023-12-15 BELOW ******************************
    timestamp: '2023-12-15 20:27:01.840',
    initDuration: '162.61',
    warmInvocationsDuration: ['1.34', '2.42', '1.83', '2.45', '1.42'],
    day: '2023-12-15',
  },
  {
    timestamp: '2023-12-15 19:43.243',
    initDuration: '145.02',
    warmInvocationsDuration: ['1.91', '2.36', '1.92', '1.36'],
    day: '2023-12-15',
  },
  {
    timestamp: '2023-12-15 19:16:43.243',
    initDuration: '122.01',
    warmInvocationsDuration: ['1.04', '1.71', '1.46', '2.82', '1.52', '1,24'],
    day: '2023-12-15',
  },
  {
    timestamp: '2023-12-15 18:47:43.243',
    initDuration: '152.75',
    warmInvocationsDuration: ['3.31', '1.56', '2.68'],
    day: '2023-12-15',
  }, // ***************** 2023-12-14 BELOW ******************************
  {
    timestamp: '2023-12-14 19:42:01.840',
    initDuration: '165.61',
    warmInvocationsDuration: ['1.34', '12.42'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 18:18:43.243',
    initDuration: '181.02',
    warmInvocationsDuration: ['11.04', '1.91', '2.36', '1.92', '1.36'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 17:46:43.243',
    initDuration: '142.05',
    warmInvocationsDuration: ['1.04', '1.71', '1.46'],
    day: '2023-12-14',
  },
  {
    timestamp: '2023-12-14 17:21:43.243',
    initDuration: '192.01',
    warmInvocationsDuration: ['9.04', '1.71', '2.33', '1.95', '1.46', '2.18'],
    day: '2023-12-14',
  },
];

const AWSdata = [
  [
    { field: '@ingestionTime', value: '2023-12-05 22:14:52.883' },
    { field: '@initDuration', value: '103.01' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'END RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:14:43.877' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAIYAQ==',
    },
  ],
];

export default ourData ;