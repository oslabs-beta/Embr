const mockData = [
  [
    // TODO: 12/11 BELOW ************************************************************
    { field: '@ingestionTime', value: '2023-12-11 22:14:52.883' },
    { field: '@initDuration', value: '103.01' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'END RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:14:43.877' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:14:52.883' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c\tDuration: 14.97 ms\tBilled Duration: 15 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:14:43.877' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '15.0' },
    { field: '@duration', value: '14.97' },
    { field: '@maxMemoryUsed', value: '6.7E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAMYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:14:52.883' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        '2023-12-11T22:14:43.862Z\t76269889-7d50-4d6d-a3f1-9b4f5322f47c\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:14:43.862' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:14:52.883' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'START RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:14:43.862' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:10:51.653' },
    { field: '@initDuration', value: '145.69' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: be5b175d-ff9d-40db-adef-77555f4b77a8\tDuration: 5.93 ms\tBilled Duration: 6 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\tInit Duration: 145.69 ms\t\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:10:47.479' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '6.0' },
    { field: '@duration', value: '5.93' },
    { field: '@maxMemoryUsed', value: '6.7E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'END RequestId: be5b175d-ff9d-40db-adef-77555f4b77a8\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:10:47.478' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        '2023-12-11T22:10:47.472Z\tbe5b175d-ff9d-40db-adef-77555f4b77a8\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:10:47.472' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAMYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'START RequestId: be5b175d-ff9d-40db-adef-77555f4b77a8 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:10:47.471' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: '2023-12-11T22:10:47.468Z\tundefined\tINFO\tLoading function\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:10:47.468' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-11 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'INIT_START Runtime Version: nodejs:18.v18\tRuntime Version ARN: arn:aws:lambda:us-east-2::runtime:d949ec0248c1b8fbc8cbc6df1c986e05fb933506b51d53be82d46f9a37125bea\n',
    },
    { field: '@timestamp', value: '2023-12-11 22:10:47.324' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAAYAQ==',
    },
  ], // TODO: 12/10 BELOW ************************************************************
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 94376af3-22fc-4de1-bc5c-7df1e71766f9\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:03.606' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBYYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 94376af3-22fc-4de1-bc5c-7df1e71766f9\tDuration: 1.49 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:03.606' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.49' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBcYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:47:03.604Z\t94376af3-22fc-4de1-bc5c-7df1e71766f9\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:03.604' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 94376af3-22fc-4de1-bc5c-7df1e71766f9 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:03.604' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 5486ce42-96dc-4c6c-8424-21c1880ca262\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:02.590' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 5486ce42-96dc-4c6c-8424-21c1880ca262\tDuration: 1.44 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:02.590' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.44' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBMYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:47:02.588Z\t5486ce42-96dc-4c6c-8424-21c1880ca262\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:02.588' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 5486ce42-96dc-4c6c-8424-21c1880ca262 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:02.588' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 2709a79e-0740-491b-87cf-08f9c1e4089b\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.842' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEA4YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 2709a79e-0740-491b-87cf-08f9c1e4089b\tDuration: 1.85 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.842' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.85' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEA8YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    { field: '@initDuration', value: '162.61' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:47:01.840Z\t2709a79e-0740-491b-87cf-08f9c1e4089b\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.840' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAwYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 2709a79e-0740-491b-87cf-08f9c1e4089b Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.840' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEA0YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 86c17def-3125-4c87-9761-8b5644e7cd6b\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.188' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAoYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 86c17def-3125-4c87-9761-8b5644e7cd6b\tDuration: 1.34 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.188' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.34' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAsYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:47:01.186Z\t86c17def-3125-4c87-9761-8b5644e7cd6b\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.186' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAgYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 86c17def-3125-4c87-9761-8b5644e7cd6b Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:01.186' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAkYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: dfa827df-e076-4bfe-a610-dda1b699c6b0\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:00.444' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAYYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: dfa827df-e076-4bfe-a610-dda1b699c6b0\tDuration: 31.42 ms\tBilled Duration: 32 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:00.444' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '32.0' },
    { field: '@duration', value: '31.42' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAcYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:47:00.422Z\tdfa827df-e076-4bfe-a610-dda1b699c6b0\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:00.422' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: dfa827df-e076-4bfe-a610-dda1b699c6b0 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:47:00.412' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    { field: '@initDuration', value: '192.01' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 5ab88447-c672-490f-8220-bd5374e3d415\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:46:12.243' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 5ab88447-c672-490f-8220-bd5374e3d415\tDuration: 118.04 ms\tBilled Duration: 119 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:46:12.243' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '119.0' },
    { field: '@duration', value: '118.04' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAMYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:46:12.222Z\t5ab88447-c672-490f-8220-bd5374e3d415\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:46:12.222' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 5ab88447-c672-490f-8220-bd5374e3d415 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:46:32.125' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: ae744449-4ff4-47d7-8fdd-beb8d0f71eff\tDuration: 1.71 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:58.423' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.71' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEA8YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: ae744449-4ff4-47d7-8fdd-beb8d0f71eff\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:58.423' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEA4YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:44:58.419Z\tae744449-4ff4-47d7-8fdd-beb8d0f71eff\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:58.419' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEA0YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: ae744449-4ff4-47d7-8fdd-beb8d0f71eff Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:58.418' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAwYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 9b205d31-ac80-4b06-9193-f81ee784171c\tDuration: 2.33 ms\tBilled Duration: 3 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:56.343' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '3.0' },
    { field: '@duration', value: '2.33' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAsYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 9b205d31-ac80-4b06-9193-f81ee784171c\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:56.343' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAoYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 9b205d31-ac80-4b06-9193-f81ee784171c Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:56.331' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAkYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:44:56.331Z\t9b205d31-ac80-4b06-9193-f81ee784171c\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:56.331' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAgYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:54.748' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAYYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6\tDuration: 1.95 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:54.748' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.95' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAcYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:44:54.746Z\t6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:54.746' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:54.745' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 7b3b1e5f-b90b-44d3-99b3-48963ec65c7b\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:52.383' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 7b3b1e5f-b90b-44d3-99b3-48963ec65c7b\tDuration: 1.46 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:52.383' },
    { field: '@type', value: 'REPORT' },
    { field: '@billedDuration', value: '2.0' },
    { field: '@duration', value: '1.46' },
    { field: '@maxMemoryUsed', value: '6.8E7' },
    { field: '@memorySize', value: '1.28E8' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAMYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-10T21:44:52.381Z\t7b3b1e5f-b90b-44d3-99b3-48963ec65c7b\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:52.381' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-10 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'START RequestId: 7b3b1e5f-b90b-44d3-99b3-48963ec65c7b Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-10 21:44:52.381' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAEYAQ==',
    },
  ],
];
//

const parseData = function (data) {
  const newData = [];
  for (let i = 0; i < data.length; i++) {
    // replace end-statement with data.length
    const newEntry = {};
    for (let j = 0; j < data[i].length; j++) {
      newEntry[data[i][j].field] = data[i][j].value;
    }
    newData.push(newEntry);
  }
  return newData;
};

const readableMockData = parseData(mockData);
//
const getInitInfo = function (data) {
  const results = [];
  for (let i = 0; i < data.length; i++) {
    const newEntry = {};
    //
    if (data[i]['@initDuration']) {
      newEntry['timestamp'] = data[i]['@timestamp'];
      newEntry['initDuration'] = data[i]['@initDuration'];
      // newEntry['message'] = data[i]['@message'];
      newEntry['warmInvocationsDuration'] = [];
      newEntry['day'] = data[i]['@timestamp'].split(' ')[0];
      results.push(newEntry);
    }
    // now for the rest of the loops, access the most recent newEntry[newEntry.length - 1]['timestampsofWarmIncovationsWithin].push(data[i]['@duration])
    else if (data[i]['@duration'] && results.length !== 0)
      results[results.length - 1]['warmInvocationsDuration'].push(data[i]['@duration']);
  }
  return results;
};
const initInfo = getInitInfo(readableMockData);
// console.log(initInfo);
//
//  from 2023-12-14 to 2023-12-20
const initMockData = [
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

// with initMockData variable that is really much it and is good information with the past week

const endStartTraffic = (data) => {
  let start = [];
  let end = []; // [17:21:57.243, 18:47:57.243, 18:47:57.243, 17:33:57.243, ... , 18:55:57.243]
  for (let i = data.length - 1; i >= 0; i--) {
    // start array
    if (i === data.length - 1) {
      start.push(data[i].timestamp);
    } else if (data[i].day !== data[i + 1].day) {
      start.push(data[i].timestamp);
    }

    // end array
    if (i === 0) {
      end.push(data[i].timestamp);
    } else if (data[i].day !== data[i - 1].day) {
      end.push(data[i].timestamp);
    }
  }
  return [start, end];
};

const [startTimestamps, endTimestamps] = endStartTraffic(initMockData);
console.log(startTimestamps);
console.log(endTimestamps);
//
//
const averageTimestamp = (timestampsArray, prewarm) => {
  let results = [];
  let averageTime = '';
  let hoursArray = [];
  let minutesArray = [];
  let prewarmInput = 10 || prewarm;
  let  prewarmTime = '';
  // split the string into the time of day
  for (let i = 0; i < timestampsArray.length; i++) {
    // grab the time value, Numberify it,
    let entry = timestampsArray[i].slice(timestampsArray[i].indexOf(' ') + 1, timestampsArray[i].indexOf('.') - 3);
    const hours = Number(entry.slice(0, entry.indexOf(':')));
    const minutes = Number(entry.slice(entry.indexOf(':') + 1));
    hoursArray.push(hours);
    minutesArray.push(minutes);
  }
  console.log(hoursArray);
  console.log(minutesArray);
  const hoursSum = hoursArray.reduce((a, b) => a + b, 0);
  const minutesSum = minutesArray.reduce((a, b) => a + b, 0);
// TODO: this is the first practical use of %
  const wtf = ((hoursSum / hoursArray.length) * 60 + (minutesSum / minutesArray.length));
  const prewtf = wtf - prewarmInput;
  console.log(wtf / 60); // this is hours.(minutes percentage into the hour because its 60 minute scale)
  console.log(Math.floor(wtf / 60))
  console.log(Math.ceil(wtf % 60));
  averageTime = Math.floor(wtf / 60).toString().concat(':').concat(Math.ceil( wtf % 60).toString());
  prewarmTime = Math.floor(prewtf / 60).toString().concat(':').concat(Math.ceil( prewtf % 60).toString());
  results.push(averageTime, prewarmTime);
    return results;
};

const averageStart = averageTimestamp(startTimestamps);
const averageEnd = averageTimestamp(endTimestamps);
console.log(averageStart, averageEnd)

module.exports = { initInfo }; // initMockData

/* TODO

1. separate our logs by day - i created a second variable of initMockData to have real mockData that is good for our presentation
2. getting the average timestamp of when the first cold-start is called for each day and most traffic until EOD
--> const [startTimestamps, endTimestamps] = endStartTraffic(initMockData)
--> const [averageStart, averageEnd] = averageTimestamp(...timestamps..., prewarmNum (optional))
  prewarmNum is a variable defaulted to 10 minutes, allowing users to input prewarm 5-15 min before
3. 
next steps: display it on the front end
* a few dropdown charts for the initInfo
* automatic warm switch - if ON
  * recommends the user to set time but the default is 10 minutes

*/
