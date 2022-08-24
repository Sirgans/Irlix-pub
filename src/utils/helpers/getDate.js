import { format } from "date-fns";
import { ru } from "date-fns/locale";

const Get = () => {
  const data = format(new Date(), 'dd MMMM yyyy', {locale: ru})

  return (
    <span className="header__date">{data}</span>
  )
}

export default Get