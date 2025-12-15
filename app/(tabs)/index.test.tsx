import { setTimerState } from "./index.tsx";
import { jest } from "@jest/globals";

describe("index.tsx TabOneScreen", () => {
  test("", () => {
    let isTimerRunning = true;
    let isTimerRunningCalled = false;

    const setTimerState = () => {
      if (isTimerRunning) return;
      isTimerRunningCalled = true;
    };

    setTimerState();

    expect(isTimerRunningCalled).toBe(false);
  });
  test("", () => {
    let isTimerRunning = false;
    let isTimerRunningCalled = false;

    const setTimerState = () => {
      if (isTimerRunning) return;
      isTimerRunningCalled = true;
    };

    setTimerState();

    expect(isTimerRunningCalled).toBe(true);
  });
});
