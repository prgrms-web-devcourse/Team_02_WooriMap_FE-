// ANCHOR: 액션 타입을 한글로 변환하는 함수
export function translateActionType(actionType: 'created' | 'modified') {
  return actionType === 'created' ? '생성' : '수정';
}
