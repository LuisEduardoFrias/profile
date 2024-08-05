//
import { language } from 'md/language'
import { State } from 'md/state'

type Action =
  { type: "ChangeLanguage", language: typeof language };

export default function Reducer<T>(state: T, actions: Action) {
  const _actions = {
    ChangeLanguage: () => {
      return { ...state, language: actions.language }
    },
    default: () => alert(`the action ${actions.type} isn't valid.`)
  }

  return (_actions[actions.type] || _actions["default"])();
}