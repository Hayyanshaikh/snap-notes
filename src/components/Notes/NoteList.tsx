import Note from './Note';
import Loading from '../common/Loading';

interface Props {
  notes: any[];
  isLoading?: boolean;
}

const NoteList: React.FC<Props> = ({ notes, isLoading }) => {

  return (
    <div className=' flex flex-col flex-1'>
      <h2 className='text-2xl text-dark dark:text-white font-medium px-4 sm:px-0 transition-all'>Notes</h2>
      {
        isLoading ? <Loading /> :
          <div className='h-full sm:overflow-auto sm:pr-2'>
            <div className='note_list relative grid grid-cols-2 grid-rows-[auto] min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-0 mt-5 flex-1'>
              {
                notes?.map((note: any, index: number) => (
                  <Note date={note?.date} id={note?.id} title={note.title} color={note?.color} key={index} content={note?.content} />
                ))
              }
            </div>
          </div>
      }
    </div>
  );
};

export default NoteList;
