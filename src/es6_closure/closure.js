(function() {
  "use strict";

  const test = function() {
    let a = true;
    console.log(a, "test");
    return function() {
      a = !a;
      return a;
    };
  };

  console.log(test()());
  console.log(test()());
  console.log(test()());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ test2");

  const test2 = (function() {
    let a = true;
    console.log(a, "test2");
    return function() {
      a = !a;
      return a;
    };
  })();
  /**
   * 매번 호출 되지는 않는다 형성된 클로저
   */
  console.log(test2());
  console.log(test2());
  console.log(test2());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ test3");

  const test3 = () => {
    let a = true;
    return (() => {
      console.log(this, "test3");
      a = !a;
      return a;
    })();
  };

  console.log(test3());
  console.log(test3());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ test4");

  const test4 = (() => {
    let a = true;
    console.log(a, "test4");
    return () => {
      a = !a;
      return a;
    };
  })();

  /**
   * 매번 호출 되지는 않고 형성된 클로저
   */
  console.log(test4());
  console.log(test4());
  console.log(test4());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ test5");

  const test5 = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    return arr;
  };

  /**
   * 하다가 겹치거나 맨 마지막 변수로만 푸쉬가 되어 진다면
   * 스코프 상을 생각하면 좋을 듯 하옵니다
   */
  console.log(test5());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ count");

  // closure Counter]

  const count = (() => {
    let count = 0;
    console.log(count, "count");
    return {
      increase: () => {
        return ++count;
      },
      decrease: () => {
        return --count;
      }
    };
  })();

  /**
   * 매번 호출 되지는 않고 형성된 클로저
   */
  console.log(count.increase());
  console.log(count.increase());
  console.log(count.increase());
  console.log(count.increase());
  console.log(count.decrease());
  console.log(count.decrease());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ count-1");

  // closure Counter]

  const count1 = () => {
    let count = 0;
    console.log(count, "in count-1");
    return (() => ({
      increase: () => {
        return ++count;
      },
      decrease: () => {
        return --count;
      }
    }))();
  };
  /**
   * 스코핑이 형성되 지 않았다
   */
  console.log(count1());
  console.log(count1().increase());
  console.log(count1().increase());
  console.log(count1().increase());
  console.log(count1().decrease());
  console.log(count1().decrease());

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ count2");

  const count2 = predict => {
    let count = 0;
    console.log(count, "count2");
    return () => {
      count = predict(count);
      console.log(count, "return in count2");
      return count;
    };
  };

  const increase = n => {
    return ++n;
  };
  const decrease = n => {
    return ++n;
  };

  /**
   * 함수호출시 인자로 함수를 넘기고 return값이 함수인경우
   * 선언은 두번 되었으나 호출 단위는 하나로
   * 매번 호출 되지는 않는 형태로 형성된 클로저
   *
   *
   * 호출시 count2 라는 함수의 실행으로 안의 함수가 등록되므로 클로저 형성
   *
   * 1. 그저 인자로 넘긴 함수들이 등록 된다
   * 2. 해당 주소 값으로 호출
   * 해당 클로저 스코핑 안에서 참조 하여 내뱉는다
   *
   */
  const increaser = count2(increase);
  const decreaser = count2(decrease); // 두번 선언한 격이 되어 지지만 하나의 스코프를 참조 한다
  console.log(increaser(), "call at count2");
  console.log(increaser(), "call at count2");
  console.log(increaser(), "call at count2");
  console.log(decreaser(), "call at count2");
  console.log(decreaser(), "call at count2");

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ count2-1");

  const count2_1 = () => {
    let count = 0;
    console.log(count, "in count2_1");
    return () => {
      count = increase(count);
      console.log(count, "in return count2_1");
      return count;
    };
  };

  // const increase = n => {
  //   return ++n;
  // };
  // const decrease = n => {
  //   return ++n;
  // };
  /**
   * 요롷게 외부의 함수를 count2_1에서 불러왔을 경우 클로저 형성이 안됨
   */

  console.log(count2_1()(), "call at count2_1");
  console.log(count2_1()(), "call at count2_1");
  console.log("++++++++++ count2-1 increaseTest");

  const increaseTest1 = count2_1();
  console.log(increaseTest1(), "increaseTest1");
  console.log(increaseTest1(), "increaseTest1");
  console.log(increaseTest1(), "increaseTest1");

  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ count2-2");
  const count2_2 = () => {
    const increase = n => {
      console.log("func in count2_2");
      return ++n;
    };
    let count = 0;
    console.log(count, "in count2_2");
    return () => {
      count = increase(count);
      console.log(count, "in return count2_2");
      return count;
    };
  };

  // const decrease = n => {
  //   return ++n;
  // };
  /**
   * 요롷게 외부의 함수를 count2_1에서 불러왔을 경우 클로저 형성이 안됨
   */

  console.log(count2_2()(), "call at count2_2");
  console.log(count2_2()(), "call at count2_2");
  console.log("++++++++++ count2-2 increaseTest");
  /**
   * 요롷게 선 실행 후 클로저 형성후 호출해 주면 클로저 형성
   */
  const increaseTest = count2_2();
  console.log(increaseTest(), "increaseTest");
  console.log(increaseTest(), "increaseTest");
  console.log(increaseTest(), "increaseTest");
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++ count3");

  //like prototype pattern
  const count3 = (() => {
    let count = 0;
    return () => {
      return ++count;
    };
  })();

  console.log(count3());
  console.log(count3());
  console.log(count3());
  console.log(count3.count, "은닉");
})();

/**
 *
 * 결론 클로저를 형성시키기 위해서 실행해서 메모리 형성을 시켜준 후 호출 하는 방식으로 진행 되어야 한다
 *
 * IIFE 든 그저 함수를 리턴 하든
 * 우선 클로저 형성을 위한 선 호출하여 클로저 형성후
 * 해당 주소로 부터 콜백한다
 *
 */
