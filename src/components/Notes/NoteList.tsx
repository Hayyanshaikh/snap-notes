import Note from './Note';
import Loading from '../common/Loading';

interface Props {
  notes: any[];
  isLoading?: boolean;
}

const NoteList: React.FC<Props> = ({ notes, isLoading }) => {

  return (
    <div className='flex flex-col gap-5'>
      <h2 className='text-2xl text-dark dark:text-white font-medium px-4 sm:px-0 transition-all'>Notes</h2>
      {
        isLoading ? <Loading /> :
          <div className='relative grid grid-flow-dense grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-4 sm:gap-6 px-4 sm:px-0'>
            {
              notes?.map((note: any, index: number) => (
                <Note
                  className=''
                  date={note?.date}
                  id={note?.id}
                  title={note.title}
                  key={index}
                  content={note?.content}
                />
              ))
            }
          </div>
      }
    </div>
  );
};

export default NoteList;
