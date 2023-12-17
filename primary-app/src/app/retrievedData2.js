const mockData = [
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
  [
    { field: '@ingestionTime', value: '2023-12-05 22:14:52.883' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c\tDuration: 14.97 ms\tBilled Duration: 15 ms\tMemory Size: 128 MB\tMax Memory Used: 67 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:14:43.877' },
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
    { field: '@ingestionTime', value: '2023-12-05 22:14:52.883' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        '2023-12-05T22:14:43.862Z\t76269889-7d50-4d6d-a3f1-9b4f5322f47c\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:14:43.862' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-05 22:14:52.883' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'START RequestId: 76269889-7d50-4d6d-a3f1-9b4f5322f47c Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:14:43.862' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAALF88qQAGVvoIwAAAAkIgASiW97DgwzEwpfew4MMxOARAkgRIxgxQ+AYYACABEAEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-05 22:10:51.653' },
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
    { field: '@timestamp', value: '2023-12-05 22:10:47.479' },
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
    { field: '@ingestionTime', value: '2023-12-05 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: 'END RequestId: be5b175d-ff9d-40db-adef-77555f4b77a8\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:10:47.478' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-05 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        '2023-12-05T22:10:47.472Z\tbe5b175d-ff9d-40db-adef-77555f4b77a8\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:10:47.472' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAMYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-05 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'START RequestId: be5b175d-ff9d-40db-adef-77555f4b77a8 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:10:47.471' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-05 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value: '2023-12-05T22:10:47.468Z\tundefined\tINFO\tLoading function\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:10:47.468' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-05 22:10:51.653' },
    {
      field: '@logStream',
      value: '2023/12/05/[$LATEST]e34ea4d32b8f441c96246bbee30ff465',
    },
    {
      field: '@message',
      value:
        'INIT_START Runtime Version: nodejs:18.v18\tRuntime Version ARN: arn:aws:lambda:us-east-2::runtime:d949ec0248c1b8fbc8cbc6df1c986e05fb933506b51d53be82d46f9a37125bea\n',
    },
    { field: '@timestamp', value: '2023-12-05 22:10:47.324' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQARI1GhgCBlIsRIMAAAABW3gKsAAGVvn9wAAAAzIgASicv6LgwzEwt8Ci4MMxOAZAwgZI4A5Q3wgYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 94376af3-22fc-4de1-bc5c-7df1e71766f9\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:03.606' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBYYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 94376af3-22fc-4de1-bc5c-7df1e71766f9\tDuration: 1.49 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:03.606' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:47:03.604Z\t94376af3-22fc-4de1-bc5c-7df1e71766f9\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:03.604' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 94376af3-22fc-4de1-bc5c-7df1e71766f9 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:03.604' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 5486ce42-96dc-4c6c-8424-21c1880ca262\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:02.590' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 5486ce42-96dc-4c6c-8424-21c1880ca262\tDuration: 1.44 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:02.590' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:47:02.588Z\t5486ce42-96dc-4c6c-8424-21c1880ca262\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:02.588' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 5486ce42-96dc-4c6c-8424-21c1880ca262 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:02.588' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEBEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 2709a79e-0740-491b-87cf-08f9c1e4089b\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.842' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEA4YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 2709a79e-0740-491b-87cf-08f9c1e4089b\tDuration: 1.85 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.842' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    { field: '@initDuration', value: '162.61' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:47:01.840Z\t2709a79e-0740-491b-87cf-08f9c1e4089b\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.840' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAwYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 2709a79e-0740-491b-87cf-08f9c1e4089b Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.840' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEA0YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 86c17def-3125-4c87-9761-8b5644e7cd6b\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.188' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAoYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 86c17def-3125-4c87-9761-8b5644e7cd6b\tDuration: 1.34 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.188' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:47:01.186Z\t86c17def-3125-4c87-9761-8b5644e7cd6b\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.186' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAgYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 86c17def-3125-4c87-9761-8b5644e7cd6b Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:01.186' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAkYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: dfa827df-e076-4bfe-a610-dda1b699c6b0\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:00.444' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAYYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: dfa827df-e076-4bfe-a610-dda1b699c6b0\tDuration: 31.42 ms\tBilled Duration: 32 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:00.444' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:47:00.422Z\tdfa827df-e076-4bfe-a610-dda1b699c6b0\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:00.422' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: dfa827df-e076-4bfe-a610-dda1b699c6b0 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:47:00.412' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    { field: '@initDuration', value: '192.01' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 5ab88447-c672-490f-8220-bd5374e3d415\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:46:57.243' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 5ab88447-c672-490f-8220-bd5374e3d415\tDuration: 118.04 ms\tBilled Duration: 119 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:46:57.243' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:46:57.222Z\t5ab88447-c672-490f-8220-bd5374e3d415\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:46:57.222' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAEYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:47:06.148' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 5ab88447-c672-490f-8220-bd5374e3d415 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:46:57.125' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBhI1GhgCBkoEqU8AAAADle8gRwAGVuSNYAAAAPIgASjl4bG2wzEwtpSytsMxOBhA5hhI8hBQowsYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: ae744449-4ff4-47d7-8fdd-beb8d0f71eff\tDuration: 1.71 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:58.423' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: ae744449-4ff4-47d7-8fdd-beb8d0f71eff\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:58.423' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEA4YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:44:58.419Z\tae744449-4ff4-47d7-8fdd-beb8d0f71eff\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:58.419' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEA0YAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: ae744449-4ff4-47d7-8fdd-beb8d0f71eff Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:58.418' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAwYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 9b205d31-ac80-4b06-9193-f81ee784171c\tDuration: 2.33 ms\tBilled Duration: 3 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:56.343' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 9b205d31-ac80-4b06-9193-f81ee784171c\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:56.343' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAoYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 9b205d31-ac80-4b06-9193-f81ee784171c Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:56.331' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAkYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:44:56.331Z\t9b205d31-ac80-4b06-9193-f81ee784171c\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:56.331' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAgYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:54.748' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAYYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6\tDuration: 1.95 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:54.748' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:44:54.746Z\t6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:54.746' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAUYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 6ebfcccd-ad0d-4378-b89a-1e3dcbce8db6 Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:54.745' },
    { field: '@type', value: 'START' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAQYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value: 'END RequestId: 7b3b1e5f-b90b-44d3-99b3-48963ec65c7b\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:52.383' },
    { field: '@type', value: 'END' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAIYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'REPORT RequestId: 7b3b1e5f-b90b-44d3-99b3-48963ec65c7b\tDuration: 1.46 ms\tBilled Duration: 2 ms\tMemory Size: 128 MB\tMax Memory Used: 68 MB\t\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:52.383' },
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
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        '2023-12-04T21:44:52.381Z\t7b3b1e5f-b90b-44d3-99b3-48963ec65c7b\tINFO\t a picture just got uploaded to the S3 original-dinner-time-images bucket!\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:52.381' },
    {
      field: '@ptr',
      value:
        'CnAKMwovMzQ3MTI5MzM4MjQ4Oi9hd3MvbGFtYmRhL3RpdGFucy1sYW1iZGEtbG9nLXRlc3QQBBI1GhgCBladNOQAAAAAIhwV8wAGVuSBQAAAAkIgASidk6q2wzEwt8KqtsMxOBBAwBBItw9Q6QkYACABEAAYAQ==',
    },
  ],
  [
    { field: '@ingestionTime', value: '2023-12-04 21:45:01.417' },
    {
      field: '@logStream',
      value: '2023/12/04/[$LATEST]c8a940ee198b466b8710087fdf685ba8',
    },
    {
      field: '@message',
      value:
        'START RequestId: 7b3b1e5f-b90b-44d3-99b3-48963ec65c7b Version: $LATEST\n',
    },
    { field: '@timestamp', value: '2023-12-04 21:44:52.381' },
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
    const newEntry = {}
    if (data[i]['@initDuration']){
      newEntry['timestamp'] = data[i]['@timestamp'];
      newEntry['initDuration'] = data[i]['@initDuration'];
      // newEntry['message'] = data[i]['@message'];
      newEntry['warmInvocationsDuration'] = [];
      results.push(newEntry);
    }
      // now for the rest of the loops, access the most recent newEntry[newEntry.length - 1]['timestampsofWarmIncovationsWithin].push(data[i]['@duration])
    else if (data[i]['@duration'] && results.length !== 0) results[results.length - 1]['warmInvocationsDuration'].push(data[i]['@duration']);
  }
  return results;
};
const initInfo = getInitInfo(readableMockData);
console.log(initInfo);

// make data dynamic
// *************** Task 1: Getting average init duration ***************
// after getting a log of initInfo
// take the average time for the first initDuration for the past 7 days TODO: do some mock
// after getting 7 average first initLogs,
  // subtract about 8 minutes and create an automatic warm function

// 


module.exports = { initInfo };