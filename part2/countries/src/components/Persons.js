const Persons = ({ list, filter, onDelete }) => {
  return list
    .filter((p, i) => p.name.indexOf(filter) >= 0)
    .map((p, i) => (
      <div key={p.id}>
        <p style={{ display: 'inline-block' }}>
          {p.name} {p.number}
        </p>
        <button onClick={() => onDelete(p.id, p.name)} type="button">
          delete
        </button>
      </div>
    ))
}

export default Persons
