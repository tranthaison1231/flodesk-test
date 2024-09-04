"use client";

import { PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

export function useSensorConfig() {
  return useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 0.01,
      },
    }),
  );
}
