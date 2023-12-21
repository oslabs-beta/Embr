const mainpage = require('../src/app/page.tsx');

test('home', () => {
  expect(mainpage()).toBe(
    <div>
      <Navbar />
      <div className={`${styles.fullWidthContainer} relative z-0`}>
        <Flex flexDirection="row" justifyContent="center">
          <div
            style={{
              maxWidth: '77vw',
              boxShadow: '0px 0px 40px gray',
              padding: '4vh 4vw 0 4vw',
            }}
          >
            <Flex flexDirection="col" className="min-w-25" style={{}}>
              <Functionrow
                funcName={nameArray[0]}
                avgColdCalls={'8'}
                avgColdstartDur={'181'}
                style={{}}
              />
              <Functionrow
                funcName={nameArray[3]}
                avgColdCalls={'2'}
                avgColdstartDur={'153'}
              />
              <Functionrow
                funcName={nameArray[4]}
                avgColdCalls={'12'}
                avgColdstartDur={'144'}
              />
              <Functionrow
                funcName={nameArray[1]}
                avgColdCalls={'4'}
                avgColdstartDur={'198'}
              />
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
});
