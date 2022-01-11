import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
// redux-actions 사용 전
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// redux-actions 사용 후
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// reducer 코드
const initailState = {
    number: 0,
};
// redux-actions 사용 전
// function counter(state = initailState, action) {
//     switch (action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1,
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1,
//             };
//         default:
//             return state;
//     }
// }
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initailState
);

export default counter;
