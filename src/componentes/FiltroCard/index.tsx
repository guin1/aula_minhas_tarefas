import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/redurces/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/tarefa'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  criteiro: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criteiro, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriteiro = filtro.criteiro === criteiro
    const mesmoValor = filtro.valor === valor

    return mesmoCriteiro && mesmoValor
  }

  const contarTarefa = () => {
    if (criteiro === 'todas') return tarefas.itens.length
    if (criteiro === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criteiro === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criteiro,
        valor
      })
    )
  }

  const contador = contarTarefa()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.label>{legenda}</S.label>
    </S.Card>
  )
}
export default FiltroCard
