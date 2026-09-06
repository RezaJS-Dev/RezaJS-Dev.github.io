// Explanation of the custom hook:
//
// sectionIds: This is an array of the id attributes of my sections
//              (e.g., sectionIds = ['hero', 'projects', 'skills', 'testimonials', 'contact']).
//
// useInView: This hook from the library is called for each section ID.
//             It returns a ref to attach to the DOM element and a boolean inView.
//
// threshold: 0.5: The callback triggers when 50% of the target section is visible.
//
// rootMargin: This string expands or contracts the viewport area for detection.
//              A negative margin like '-10% 0px -10% 0px' can help avoid overlapping active states.
//
"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  // This object will store the `inView` status for each section ID as the initial state.
  // For example: { hero: true, projects: false, skills: false }
  const [inViewStates, setInViewStates] = useState(
    sectionIds.reduce((acc, id) => ({ ...acc, [id]: false }), {}),
  );

  // Create an observer for each section ID.
  // The `useInView` hook returns a `ref`
  // that needs to be attached to the corresponding DOM element,
  // and a boolean inView.
  // Output Example:
  //   {
  //     contact: {ref: (element) => { ... }, inView: false},
  //     hero: {ref: (element) => { ... }, inView: false},
  //     projects: {ref: (element) => { ... }, inView: false},
  //     skills: {ref: (element) => { ... }, inView: false},
  //     testimonials: {ref: (element) => { ... }, inView: false},
  //   }
  const refs = sectionIds.reduce((acc, id) => {
    const [ref, inView] = useInView({
      threshold: 0.1, // Triggers when 50% of the section is visible.
      rootMargin: "-1% 0px -1% 0px", // adjust this as needed
    });
    acc[id] = { ref, inView };
    return acc;
  }, {});

  // Update the `inViewStates` object whenever any `inView` status changes.
  useEffect(() => {
    setInViewStates((prev) => {
      const newStates = { ...prev };
      let updated = false;
      for (const id of sectionIds) {
        if (refs[id].inView !== prev[id]) {
          newStates[id] = refs[id].inView;
          updated = true;
        }
      }
      return updated ? newStates : prev;
    });
  }, [sectionIds, refs]);

  // Determine the active section. If multiple sections are in view, the one
  // with the highest index (the last one in the array) is selected.
  useEffect(() => {
    const active = sectionIds.reduce((lastActive, id) => {
      return inViewStates[id] ? id : lastActive;
    }, sectionIds[0]);
    setActiveSection(active);
  }, [inViewStates, sectionIds]);

  return { activeSection, refs };
};
