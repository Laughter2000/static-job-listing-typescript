import React, { useReducer } from 'react';
import Job from '../Job';
import { CardList, FilterList, Filters, FilterItem, RemoveIcon, SpanText, Span } from './styles';
import Data from '../../data.json';

import iconRemove from '../../images/icon-remove.svg';

type Add = {
  readonly type: 'ADD';
  readonly payload: string;
};

type Remove = {
  readonly type: 'REMOVE';
  readonly payload: string;
};

type Clear = {
  readonly type: 'CLEAR';
};

type Actions = Add | Remove | Clear;

const jobReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'ADD':
      if (state.filters.includes(action.payload)) {
        return { filters: [...state.filters] };
      }
      return { filters: [...state.filters, action.payload] };
    case 'REMOVE':
      return { filters: state.filters.filter((item: string): boolean => item !== action.payload) };
    case 'CLEAR':
      return { filters: [] };
    default:
      neverReached(action);
  }
  return state;
};

const neverReached = (action: never) => {};

type State = {
  filters: string[];
};

const Listing = () => {
  const [items, dispatchItem] = useReducer<React.Reducer<State, Actions>>(jobReducer, {
    filters: [],
  });

  const filterTodo =
    items.filters.length === 0
      ? Data
      : Data.filter((job) => {
          const list = [job.role, job.level, ...job.languages, ...job.tools];
          var validity: boolean[] = [];
          for (var i = 0; i < items.filters.length; i++) {
            list.includes(items.filters[i]) ? validity.push(true) : validity.push(false);
          }
          var check = validity;
          validity = [];
          return check.includes(false) ? false : true;
        });

  return (
    <>
      {items.filters.length === 0 ? (
        ''
      ) : (
        <FilterList>
          <Filters>
            {items.filters.map((item) => (
              <FilterItem key={item}>
                <Span>{item}</Span>
                <RemoveIcon
                  src={iconRemove}
                  onClick={() =>
                    dispatchItem({
                      type: 'REMOVE',
                      payload: item,
                    })
                  }
                ></RemoveIcon>
              </FilterItem>
            ))}
          </Filters>

          <SpanText
            onClick={() =>
              dispatchItem({
                type: 'CLEAR',
              })
            }
          >
            Clear
          </SpanText>
        </FilterList>
      )}
      <CardList>
        {filterTodo.map((job) => (
          <Job
            key={job.id}
            id={job.id}
            company={job.company}
            logo={job.logo}
            news={job.new}
            featured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            languages={job.languages}
            tools={job.tools}
            onclick={(item) => dispatchItem({ type: 'ADD', payload: item })}
          />
        ))}
      </CardList>
    </>
  );
};

export default Listing;
