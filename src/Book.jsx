// export default function Book({ task, isDone }) {
//   return (
//     <>
//       <p>Reading: {task}</p>
//     </>
//   );
// }

// export default Book;

// Option 1: Condition based rendering

// export default function Book({ task, isDone }) {
//   if (isDone === true) {
//     return (
//       <p>
//         Finished: {task} {isDone}
//       </p>
//     );
//   } else {
//     return <p>Reading: {task}</p>;
//   }
// }

// Option 2: Condition based rendering

// export default function Book({ task, isDone }) {
//   if (isDone) {
//     return (
//       <p>
//         Finished: {task} {isDone}
//       </p>
//     );
//   }
//   return <p>Reading: {task}</p>;
// }

// Option 3: Condition based rendering ternary  operator ***

// export default function Book({ task, isDone }) {
//   return (
//     <p>
//       {isDone ? "Finished" : "Work on"} : {task}
//     </p>
//   );
// }

// Option 4: Condition based rendering && (Logical and operator)

// export default function Book({ task, isDone }) {
//   return (
//     <p>
//       {task} {isDone && ": Finished"}
//     </p>
//   );
// }

// Option 5: Condition based rendering || (Logical or operator)

export default function Book({ task, isDone }) {
  return (
    <p>
      {task} {isDone || ": Work on"}
    </p>
  );
}
